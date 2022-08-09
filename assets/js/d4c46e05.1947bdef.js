"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>C});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),C=a,m=s["".concat(o,".").concat(C)]||s[C]||d[C]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"distributed_transaction",title:"\u5206\u5e03\u5f0f\u4e8b\u52a1"},i=void 0,c={unversionedId:"db/distributed_transaction",id:"db/distributed_transaction",title:"\u5206\u5e03\u5f0f\u4e8b\u52a1",description:"\u5728\u5355\u4e2a\u6570\u636e\u5e93\u7684\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u4e8b\u52a1\u64cd\u4f5c\u5177\u6709 ACID \u56db\u4e2a\u7279\u6027\uff0c\u4f46\u5982\u679c\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u64cd\u4f5c\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528\u6570\u636e\u5e93\u4e8b\u52a1\u6765\u4fdd\u8bc1\u4e00\u81f4\u6027\u3002",source:"@site/docs/db/distributed_transaction.md",sourceDirName:"db",slug:"/db/distributed_transaction",permalink:"/wiki/docs/db/distributed_transaction",draft:!1,tags:[],version:"current",frontMatter:{id:"distributed_transaction",title:"\u5206\u5e03\u5f0f\u4e8b\u52a1"}},o={},p=[{value:"XA \u89c4\u8303",id:"xa-\u89c4\u8303",level:2},{value:"2PC",id:"2pc",level:3},{value:"2PC \u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898",id:"2pc-\u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898",level:3},{value:"3PC",id:"3pc",level:3},{value:"3PC\u76f8\u5bf9\u4e8e2PC\u800c\u8a00\u5230\u5e95\u4f18\u5316\u4e86\u4ec0\u4e48\u5730\u65b9\u5462",id:"3pc\u76f8\u5bf9\u4e8e2pc\u800c\u8a00\u5230\u5e95\u4f18\u5316\u4e86\u4ec0\u4e48\u5730\u65b9\u5462",level:3},{value:"\u4e8b\u52a1\u8865\u507f\u673a\u5236\uff08TCC\uff09",id:"\u4e8b\u52a1\u8865\u507f\u673a\u5236tcc",level:3}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5355\u4e2a\u6570\u636e\u5e93\u7684\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u4e8b\u52a1\u64cd\u4f5c\u5177\u6709 ACID \u56db\u4e2a\u7279\u6027\uff0c\u4f46\u5982\u679c\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u64cd\u4f5c\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528\u6570\u636e\u5e93\u4e8b\u52a1\u6765\u4fdd\u8bc1\u4e00\u81f4\u6027\u3002"),(0,a.kt)("p",null,"\u5206\u5e03\u5f0f\u4e8b\u52a1\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e0b\uff0c\u4e0d\u540c\u8282\u70b9\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002\u5728\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u8bf7\u6c42\u591a\u4e2a\u670d\u52a1\u6216\u591a\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u65f6\uff0c\u8981\u4e48\u6240\u6709\u8bf7\u6c42\u6210\u529f\uff0c\u8981\u4e48\u6240\u6709\u8bf7\u6c42\u90fd\u5931\u8d25\u56de\u6eda\u56de\u53bb\u3002\u901a\u5e38\uff0c\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u5b9e\u73b0\u6709\u591a\u79cd\u65b9\u5f0f\uff0c\u4f8b\u5982 XA \u534f\u8bae\u5b9e\u73b0\u7684\u4e8c\u9636\u63d0\u4ea4\uff082PC\uff09\u3001\u4e09\u9636\u63d0\u4ea4 (3PC)\uff0c\u4ee5\u53ca TCC \u8865\u507f\u6027\u4e8b\u52a1\u3002"),(0,a.kt)("h2",{id:"xa-\u89c4\u8303"},"XA \u89c4\u8303"),(0,a.kt)("p",null,"\u5728 XA \u89c4\u8303\u4e4b\u524d\uff0c\u5b58\u5728\u7740\u4e00\u4e2a DTP \u6a21\u578b\uff0c\u8be5\u6a21\u578b\u89c4\u8303\u4e86\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u6a21\u578b\u8bbe\u8ba1\u3002"),(0,a.kt)("p",null,"DTP \u89c4\u8303\u4e2d\u4e3b\u8981\u5305\u542b\u4e86 AP\u3001RM\u3001TM \u4e09\u4e2a\u90e8\u5206\uff0c\u5176\u4e2d AP \u662f\u5e94\u7528\u7a0b\u5e8f\uff0c\u662f\u4e8b\u52a1\u53d1\u8d77\u548c\u7ed3\u675f\u7684\u5730\u65b9\uff1bRM \u662f\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u4e3b\u8981\u8d1f\u8d23\u7ba1\u7406\u6bcf\u4e2a\u6570\u636e\u5e93\u7684\u8fde\u63a5\u6570\u636e\u6e90\uff1bTM \u662f\u4e8b\u52a1\u7ba1\u7406\u5668\uff0c\u8d1f\u8d23\u4e8b\u52a1\u7684\u5168\u5c40\u7ba1\u7406\uff0c\u5305\u62ec\u4e8b\u52a1\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u548c\u8d44\u6e90\u7684\u5206\u914d\u534f\u8c03\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(697).Z,width:"1086",height:"676"}),"\nXA \u5219\u89c4\u8303\u4e86 TM \u4e0e RM \u4e4b\u95f4\u7684\u901a\u4fe1\u63a5\u53e3\uff0c\u5728 TM \u4e0e\u591a\u4e2a RM \u4e4b\u95f4\u5f62\u6210\u4e00\u4e2a\u53cc\u5411\u901a\u4fe1\u6865\u6881\uff0c\u4ece\u800c\u5728\u591a\u4e2a\u6570\u636e\u5e93\u8d44\u6e90\u4e0b\u4fdd\u8bc1 ACID \u56db\u4e2a\u7279\u6027\u3002"),(0,a.kt)("h3",{id:"2pc"},"2PC"),(0,a.kt)("p",null,"\u7b2c\u4e00\u9636\u6bb5\uff0c\u5e94\u7528\u7a0b\u5e8f\u5411\u4e8b\u52a1\u7ba1\u7406\u5668\uff08TM\uff09\u53d1\u8d77\u4e8b\u52a1\u8bf7\u6c42\uff0c\u800c\u4e8b\u52a1\u7ba1\u7406\u5668\u5206\u522b\u5411\u53c2\u4e0e\u7684\u5404\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668 (RM) \u53d1\u9001\u4e8b\u52a1\u9884\u5904\u7406\u8bf7\u6c42\uff08Prepare\uff09\u3002\u6b64\u65f6\u8fd9\u4e9b\u8d44\u6e90\u7ba1\u7406\u5668\u4f1a\u6253\u5f00\u672c\u5730\u6570\u636e\u5e93\u4e8b\u52a1\uff0c\u7136\u540e\u5f00\u59cb\u6267\u884c\u6570\u636e\u5e93\u4e8b\u52a1,\u4f46\u6267\u884c\u5b8c\u6210\u540e\u5e76\u4e0d\u4f1a\u7acb\u5373\u63d0\u4ea4\u4e8b\u52a1\uff0c\u800c\u662f\u5411\u4e8b\u52a1\u7ba1\u7406\u5668\u8fd4\u56de\u5df2\u5c31\u7eea\uff08Ready\uff09\u6216\u672a\u5c31\u7eea\uff08Not Ready\uff09\u72b6\u6001\u3002\u5982\u679c\u5404\u4e2a\u53c2\u4e0e\u8282\u70b9\u90fd\u8fd4\u56de\u72b6\u6001\u4e86\uff0c\u5c31\u4f1a\u8fdb\u5165\u7b2c\u4e8c\u9636\u6bb5\u3002\n",(0,a.kt)("img",{src:n(3982).Z,width:"2224",height:"746"})),(0,a.kt)("p",null,"\u5230\u4e86\u7b2c\u4e8c\u9636\u6bb5\uff0c\u5982\u679c\u5404\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u8fd4\u56de\u7684\u90fd\u662f\u5c31\u7eea\u72b6\u6001\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u5219\u4f1a\u5411\u5404\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u53d1\u9001\u63d0\u4ea4\uff08commit)\u901a\u77e5\u3002\u8d44\u6e90\u7ba1\u7406\u5668\u5219\u4f1a\u5b8c\u6210\u672c\u5730\u6570\u636e\u5e93\u7684\u4e8b\u52a1\u63d0\u4ea4\uff0c\u6700\u7ec8\u8fd4\u56de\u63d0\u4ea4\u7ed3\u679c\u7ed9\u4e8b\u52a1\u7ba1\u7406\u5668\u3002\n",(0,a.kt)("img",{src:n(2226).Z,width:"2212",height:"688"})),(0,a.kt)("p",null,"\u5728\u7b2c\u4e8c\u9636\u6bb5\u4e2d\uff0c\u5982\u679c\u4efb\u610f\u8d44\u6e90\u7ba1\u7406\u5668\u8fd4\u56de\u4e86\u672a\u5c31\u7eea\u72b6\u6001\uff0c\u6b64\u65f6\u4e8b\u52a1\u7ba1\u7406\u5668\u4f1a\u5411\u6240\u6709\u8d44\u6e90\u7ba1\u7406\u5668\u53d1\u9001\u4e8b\u52a1\u56de\u6eda\uff08Rollback\uff09\u901a\u77e5\uff0c\u6b64\u65f6\u5404\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u5c31\u4f1a\u56de\u6eda\u672c\u5730\u6570\u636e\u5e93\u4e8b\u52a1\uff0c\u91ca\u653e\u8d44\u6e90\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u901a\u77e5\u3002\n",(0,a.kt)("img",{src:n(621).Z,width:"2202",height:"760"})),(0,a.kt)("h3",{id:"2pc-\u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898"},"2PC \u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6574\u4e2a\u6d41\u7a0b\u4e2d\uff0c\u5404\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u8282\u70b9\u5b58\u5728\u963b\u585e\uff0c\u53ea\u6709\u5f53\u6240\u6709\u7684\u8282\u70b9\u90fd\u51c6\u5907\u5b8c\u6210\u4e4b\u540e\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u624d\u4f1a\u53d1\u51fa\u8fdb\u884c\u5168\u5c40\u4e8b\u52a1\u63d0\u4ea4\u7684\u901a\u77e5\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5982\u679c\u5f88\u957f\uff0c\u5219\u4f1a\u6709\u5f88\u591a\u8282\u70b9\u957f\u65f6\u95f4\u5360\u7528\u8d44\u6e90\uff0c\u4ece\u800c\u5f71\u54cd\u6574\u4e2a\u8282\u70b9\u7684\u6027\u80fd\u3002\u4e00\u65e6\u8d44\u6e90\u7ba1\u7406\u5668\u6302\u4e86\uff0c\u5c31\u4f1a\u51fa\u73b0\u4e00\u76f4\u963b\u585e\u7b49\u5f85\u7684\u60c5\u51b5\u3002\u7c7b\u4f3c\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e8b\u52a1\u8d85\u65f6\u65f6\u95f4\u6765\u89e3\u51b3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ecd\u7136\u5b58\u5728\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u53ef\u80fd\u6027\uff0c\u4f8b\u5982\uff0c\u5728\u6700\u540e\u901a\u77e5\u63d0\u4ea4\u5168\u5c40\u4e8b\u52a1\u65f6\uff0c\u7531\u4e8e\u7f51\u7edc\u6545\u969c\uff0c\u90e8\u5206\u8282\u70b9\u6709\u53ef\u80fd\u6536\u4e0d\u5230\u901a\u77e5\uff0c\u7531\u4e8e\u8fd9\u90e8\u5206\u8282\u70b9\u6ca1\u6709\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\u51fa\u73b0\u3002")),(0,a.kt)("h3",{id:"3pc"},"3PC"),(0,a.kt)("p",null,"3PC \u628a 2PC \u7684\u51c6\u5907\u9636\u6bb5\u5206\u4e3a\u4e86\u51c6\u5907\u9636\u6bb5\u548c\u9884\u5904\u7406\u9636\u6bb5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u9636\u6bb5\u53ea\u662f\u8be2\u95ee\u5404\u4e2a\u8d44\u6e90\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u6267\u884c\u4e8b\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e8c\u9636\u6bb5\uff0c\u6240\u6709\u7684\u8282\u70b9\u53cd\u9988\u53ef\u4ee5\u6267\u884c\u4e8b\u52a1\uff0c\u624d\u5f00\u59cb\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u5728\u7b2c\u4e09\u9636\u6bb5\u6267\u884c\u63d0\u4ea4\u6216\u56de\u6eda\u64cd\u4f5c\u3002\u5e76\u4e14\u5728\u4e8b\u52a1\u7ba1\u7406\u5668\u548c\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u90fd\u5f15\u5165\u4e86\u8d85\u65f6\u673a\u5236\uff0c\u5982\u679c\u5728\u7b2c\u4e09\u9636\u6bb5\uff0c\u8d44\u6e90\u8282\u70b9\u4e00\u76f4\u65e0\u6cd5\u6536\u5230\u6765\u81ea\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u63d0\u4ea4\u6216\u56de\u6eda\u8bf7\u6c42\uff0c\u5b83\u5c31\u4f1a\u5728\u8d85\u65f6\u4e4b\u540e\uff0c\u7ee7\u7eed\u63d0\u4ea4\u4e8b\u52a1")),(0,a.kt)("p",null,"3PC \u53ef\u4ee5\u901a\u8fc7\u8d85\u65f6\u673a\u5236\uff0c\u907f\u514d\u7ba1\u7406\u5668\u6302\u6389\u6240\u9020\u6210\u7684\u957f\u65f6\u95f4\u963b\u585e\u95ee\u9898\uff0c\u4f46\u5176\u5b9e\u8fd9\u6837\u8fd8\u662f\u65e0\u6cd5\u89e3\u51b3\u5728\u6700\u540e\u63d0\u4ea4\u5168\u5c40\u4e8b\u52a1\u65f6\uff0c\u7531\u4e8e\u7f51\u7edc\u6545\u969c\u65e0\u6cd5\u901a\u77e5\u5230\u4e00\u4e9b\u8282\u70b9\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u56de\u6eda\u901a\u77e5\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u4e8b\u52a1\u7b49\u5f85\u8d85\u65f6\u4ece\u800c\u9ed8\u8ba4\u63d0\u4ea4\u3002"),(0,a.kt)("h3",{id:"3pc\u76f8\u5bf9\u4e8e2pc\u800c\u8a00\u5230\u5e95\u4f18\u5316\u4e86\u4ec0\u4e48\u5730\u65b9\u5462"},"3PC\u76f8\u5bf9\u4e8e2PC\u800c\u8a00\u5230\u5e95\u4f18\u5316\u4e86\u4ec0\u4e48\u5730\u65b9\u5462"),(0,a.kt)("p",null,"\u76f8\u6bd4\u8f832PC\u800c\u8a00\uff0c3PC\u5bf9\u4e8ePM\u548cTM \u90fd\u8bbe\u7f6e\u4e86\u8d85\u65f6\u65f6\u95f4\uff0c\u800c2PC\u53ea\u6709TM\u624d\u62e5\u6709\u8d85\u65f6\u673a\u5236\u3002\u8fd9\u89e3\u51b3\u4e86\u4e00\u4e2a\u4ec0\u4e48\u95ee\u9898\u5462\uff1f\u8fd9\u4e2a\u4f18\u5316\u70b9\uff0c\u4e3b\u8981\u662f\u907f\u514d\u4e86\u53c2\u4e0e\u8005\u5728\u957f\u65f6\u95f4\u65e0\u6cd5\u4e0eTM\u8282\u70b9\u901a\u8baf\uff08TM\u6302\u6389\u4e86\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u91ca\u653e\u8d44\u6e90\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u53c2\u4e0e\u8005\u81ea\u8eab\u62e5\u6709\u8d85\u65f6\u673a\u5236\u4f1a\u5728\u8d85\u65f6\u540e\uff0c\u81ea\u52a8\u8fdb\u884c\u672c\u5730commit\u4ece\u800c\u8fdb\u884c\u91ca\u653e\u8d44\u6e90\u3002\u800c\u8fd9\u79cd\u673a\u5236\u4e5f\u4fa7\u9762\u964d\u4f4e\u4e86\u6574\u4e2a\u4e8b\u52a1\u7684\u963b\u585e\u65f6\u95f4\u548c\u8303\u56f4\u3002"),(0,a.kt)("h3",{id:"\u4e8b\u52a1\u8865\u507f\u673a\u5236tcc"},"\u4e8b\u52a1\u8865\u507f\u673a\u5236\uff08TCC\uff09"),(0,a.kt)("p",null,"TCC \u91c7\u7528\u6700\u7ec8\u4e00\u81f4\u6027\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e86\u4e00\u79cd\u67d4\u6027\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u4e0e XA \u89c4\u8303\u5b9e\u73b0\u7684\u4e8c\u9636\u4e8b\u52a1\u4e0d\u540c\u7684\u662f\uff0cTCC \u7684\u5b9e\u73b0\u662f\u57fa\u4e8e\u670d\u52a1\u5c42\u5b9e\u73b0\u7684\u4e00\u79cd\u4e8c\u9636\u4e8b\u52a1\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"TCC \u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff0c\u5373 Try\u3001Confirm\u3001Cancel \u4e09\u4e2a\u9636\u6bb5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(743).Z,width:"1892",height:"1300"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Try \u9636\u6bb5: \u4e3b\u8981\u5c1d\u8bd5\u6267\u884c\u4e1a\u52a1\uff0c\u6267\u884c\u5404\u4e2a\u670d\u52a1\u4e2d\u7684 Try \u65b9\u6cd5\uff0c\u4e3b\u8981\u5305\u62ec\u9884\u7559\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"Confirm \u9636\u6bb5\uff1a\u786e\u8ba4 Try \u4e2d\u7684\u5404\u4e2a\u65b9\u6cd5\u6267\u884c\u6210\u529f\uff0c\u7136\u540e\u901a\u8fc7 TM \u8c03\u7528\u5404\u4e2a\u670d\u52a1\u7684 Confirm \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u9636\u6bb5\u662f\u63d0\u4ea4\u9636\u6bb5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Cancel \u9636\u6bb5\uff1a\u5f53\u5728 Try \u9636\u6bb5\u53d1\u73b0\u5176\u4e2d\u4e00\u4e2a Try \u65b9\u6cd5\u5931\u8d25\uff0c\u4f8b\u5982\u9884\u7559\u8d44\u6e90\u5931\u8d25\u3001\u4ee3\u7801\u5f02\u5e38\u7b49\uff0c\u5219\u4f1a\u89e6\u53d1 TM \u8c03\u7528\u5404\u4e2a\u670d\u52a1\u7684 Cancel \u65b9\u6cd5\uff0c\u5bf9\u5168\u5c40\u4e8b\u52a1\u8fdb\u884c\u56de\u6eda\uff0c\u53d6\u6d88\u6267\u884c\u4e1a\u52a1\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6267\u884c\u53ea\u662f\u4fdd\u8bc1 Try \u9636\u6bb5\u6267\u884c\u65f6\u6210\u529f\u6216\u5931\u8d25\u7684\u63d0\u4ea4\u548c\u56de\u6eda\u64cd\u4f5c\uff0c\u4f60\u80af\u5b9a\u4f1a\u60f3\u5230\uff0c\u5982\u679c\u5728 Confirm \u548c Cancel \u9636\u6bb5\u51fa\u73b0\u5f02\u5e38\u60c5\u51b5\uff0c\u90a3 TCC \u8be5\u5982\u4f55\u5904\u7406\u5462\uff1f\u6b64\u65f6 TCC \u4f1a\u4e0d\u505c\u5730\u91cd\u8bd5\u8c03\u7528\u5931\u8d25\u7684 Confirm \u6216 Cancel \u65b9\u6cd5\uff0c\u76f4\u5230\u6210\u529f\u4e3a\u6b62\u3002"),(0,a.kt)("p",null,"TCC \u8865\u507f\u6027\u4e8b\u52a1\u4e5f\u6709\u6bd4\u8f83\u660e\u663e\u7684\u7f3a\u70b9\uff0c\u90a3\u5c31\u662f\u5bf9\u4e1a\u52a1\u7684\u4fb5\u5165\u6027\u975e\u5e38\u5927\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728\u4e1a\u52a1\u8bbe\u8ba1\u7684\u65f6\u5019\u8003\u8651\u9884\u7559\u8d44\u6e90\uff1b\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199\u5927\u91cf\u4e1a\u52a1\u6027\u4ee3\u7801\uff0c\u4f8b\u5982 Try\u3001Confirm\u3001Cancel \u65b9\u6cd5\uff1b\u6700\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4e3a\u6bcf\u4e2a\u65b9\u6cd5\u8003\u8651\u5e42\u7b49\u6027\u3002\u8fd9\u79cd\u4e8b\u52a1\u7684\u5b9e\u73b0\u548c\u7ef4\u62a4\u6210\u672c\u975e\u5e38\u9ad8\uff0c\u4f46\u7efc\u5408\u6765\u770b\uff0c\u8fd9\u79cd\u5b9e\u73b0\u662f\u76ee\u524d\u5927\u5bb6\u6700\u5e38\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\u3002"))}d.isMDXComponent=!0},3982:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2PC1-d02ed8d186a5769b6da77c016ae8286e.webp"},2226:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2PC2-587af8e6f7e38e8d9bc4ad9490f9cba0.webp"},621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2PC3-3a0b827d48c6304ece3170f3f41f653c.webp"},743:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/TCC-0bdc6a5a848837e6c52d7a0e727d55a6.webp"},697:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dtp-898659c4a93adc488bba4f3cdb2039af.webp"}}]);