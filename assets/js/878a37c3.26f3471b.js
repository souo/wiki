"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[4730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"oom",title:"OOM"},l=void 0,i={unversionedId:"questions/oom",id:"questions/oom",title:"OOM",description:"Q1: \u5982\u4f55\u907f\u514dthreadLocal\u5185\u5b58\u6cc4\u6f0f?",source:"@site/docs/questions/oom.md",sourceDirName:"questions",slug:"/questions/oom",permalink:"/wiki/docs/questions/oom",draft:!1,tags:[],version:"current",frontMatter:{id:"oom",title:"OOM"}},c={},u=[{value:"Q1: \u5982\u4f55\u907f\u514dthreadLocal\u5185\u5b58\u6cc4\u6f0f?",id:"q1-\u5982\u4f55\u907f\u514dthreadlocal\u5185\u5b58\u6cc4\u6f0f",level:2},{value:"Q2: \u5185\u5b58\u6cc4\u9732\u548c\u5185\u5b58\u6ea2\u51fa\u6709\u5565\u533a\u522b",id:"q2-\u5185\u5b58\u6cc4\u9732\u548c\u5185\u5b58\u6ea2\u51fa\u6709\u5565\u533a\u522b",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"q1-\u5982\u4f55\u907f\u514dthreadlocal\u5185\u5b58\u6cc4\u6f0f"},"Q1: \u5982\u4f55\u907f\u514dthreadLocal\u5185\u5b58\u6cc4\u6f0f?"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0cThreadLocal\u662f\u57fa\u4e8eThreadLocalMap\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2aMap\u7684Entry\u7ee7\u627f\u4e86WeakReference\uff0c\u800cEntry\u5bf9\u8c61\u4e2d\u7684key\u4f7f\u7528\u4e86WeakReference\u5c01\u88c5\uff0c\u4e5f\u5c31\u662f\u8bf4Entry\u4e2d\u7684key\u662f\u4e00\u4e2a\u5f31\u5f15\u7528\u7c7b\u578b\uff0c\u800c\u5f31\u5f15\u7528\u7c7b\u578b\u53ea\u80fd\u5b58\u6d3b\u5728\u4e0b\u6b21GC\u4e4b\u524d\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528ThreadLocal\u7684set\u8bbe\u7f6e\u53d8\u91cf\uff0c\u5f53\u524dThreadLocalMap\u5219\u65b0\u589e\u4e00\u6761\u8bb0\u5f55\uff0c\u6b64\u65f6ThreadLocal\u5b9e\u4f8b\u6ca1\u6709\u5916\u90e8\u5f3a\u5f15\u7528\uff0c\u5f53\u53d1\u751f\u4e00\u6b21\u5783\u573e\u56de\u6536\uff0c\u6b64\u65f6key\u503c\u88ab\u56de\u6536\uff0c\u800cvalue\u503c\u4f9d\u7136\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u7531\u4e8e\u5f53\u524d\u7ebf\u7a0b\u4e00\u76f4\u5b58\u5728\uff0c\u6240\u4ee5value\u503c\u5c06\u4e00\u76f4\u88ab\u5f15\u7528\u3002."),(0,o.kt)("p",null,"\u8fd9\u4e9b\u88ab\u5783\u573e\u56de\u6536\u6389\u7684key\u5c31\u5b58\u5728\u4e00\u6761\u5f15\u7528\u94fe\u7684\u5173\u7cfb\u4e00\u76f4\u5b58\u5728\uff1aThread --\x3e ThreadLocalMap--\x3eEntry--\x3eValue\uff0c\u8fd9\u6761\u5f15\u7528\u94fe\u4f1a\u5bfc\u81f4Entry\u4e0d\u4f1a\u56de\u6536\uff0cValue\u4e5f\u4e0d\u4f1a\u56de\u6536\uff0c\u4f46Entry\u4e2d\u7684Key\u5374\u5df2\u7ecf\u88ab\u56de\u6536\u7684\u60c5\u51b5\uff0c\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5728\u4f7f\u7528\u5b8c\u8be5key\u503c\u4e4b\u540e\uff0c\u901a\u8fc7remove\u65b9\u6cd5remove\u6389\uff0c\u5c31\u53ef\u4ee5\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\u4e86\u3002"),(0,o.kt)("h2",{id:"q2-\u5185\u5b58\u6cc4\u9732\u548c\u5185\u5b58\u6ea2\u51fa\u6709\u5565\u533a\u522b"},"Q2: \u5185\u5b58\u6cc4\u9732\u548c\u5185\u5b58\u6ea2\u51fa\u6709\u5565\u533a\u522b"),(0,o.kt)("p",null,"\u5185\u5b58\u6cc4\u6f0f\u662f\u6307\u4e0d\u518d\u4f7f\u7528\u7684\u5bf9\u8c61\u65e0\u6cd5\u5f97\u5230\u53ca\u65f6\u7684\u56de\u6536\uff0c\u6301\u7eed\u5360\u7528\u5185\u5b58\u7a7a\u95f4\uff0c\u4ece\u800c\u9020\u6210\u5185\u5b58\u7a7a\u95f4\u7684\u6d6a\u8d39\u3002\u4f8b\u5982\uff0c\u5728Java6\u4e2dsubstring\u65b9\u6cd5\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u60c5\u51b5\u53d1\u751f\u3002\u5f53\u8c03\u7528substring\u65b9\u6cd5\u65f6\u4f1a\u8c03\u7528new string\u6784\u9020\u51fd\u6570\uff0c\u6b64\u65f6\u4f1a\u590d\u7528\u539f\u6765\u5b57\u7b26\u4e32\u7684char\u6570\u7ec4\uff0c\u800c\u5982\u679c\u6211\u4eec\u4ec5\u4ec5\u662f\u7528substring\u83b7\u53d6\u4e00\u5c0f\u6bb5\u5b57\u7b26\uff0c\u800c\u539f\u672cstring\u5b57\u7b26\u4e32\u975e\u5e38\u5927\u7684\u60c5\u51b5\u4e0b\uff0csubstring\u7684\u5bf9\u8c61\u5982\u679c\u4e00\u76f4\u88ab\u5f15\u7528\uff0c\u7531\u4e8esubstring\u7684\u91cc\u9762\u7684char\u6570\u7ec4\u4ecd\u7136\u6307\u5411\u539f\u5b57\u7b26\u4e32\uff0c\u6b64\u65f6string\u5b57\u7b26\u4e32\u4e5f\u65e0\u6cd5\u56de\u6536\uff0c\u4ece\u800c\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002"),(0,o.kt)("p",null,"\u5185\u5b58\u6ea2\u51fa\u5219\u662f\u53d1\u751f\u4e86OutOfMemoryException\uff0c\u5185\u5b58\u6ea2\u51fa\u7684\u60c5\u51b5\u6709\u5f88\u591a\uff0c\u4f8b\u5982\u5806\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\uff0c\u6808\u7a7a\u95f4\u4e0d\u8db3\uff0c\u4ee5\u53ca\u65b9\u6cd5\u533a\u7a7a\u95f4\u4e0d\u8db3\u90fd\u4f1a\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("p",null,"\u5185\u5b58\u6cc4\u6f0f\u4e0e\u5185\u5b58\u6ea2\u51fa\u7684\u5173\u7cfb\uff1a\u5185\u5b58\u6cc4\u6f0f\u5f88\u5bb9\u6613\u5bfc\u81f4\u5185\u5b58\u6ea2\u51fa\uff0c\u4f46\u5185\u5b58\u6ea2\u51fa\u4e0d\u4e00\u5b9a\u662f\u5185\u5b58\u6cc4\u6f0f\u5bfc\u81f4\u7684\u3002"))}p.isMDXComponent=!0}}]);