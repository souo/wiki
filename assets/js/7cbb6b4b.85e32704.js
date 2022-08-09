"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[380],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>y});var a=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var c=a.createContext({}),s=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=s(n.components);return a.createElement(c.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),d=s(e),y=i,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return e?a.createElement(f,l(l({ref:t},u),{},{components:e})):a.createElement(f,l({ref:t},u))}));function y(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=n,r.mdxType="string"==typeof n?n:i,l[1]=r;for(var s=2;s<o;s++)l[s]=e[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},99:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=e(7462),i=(e(7294),e(3905));const o={id:"thread_signaling",title:"\u7ebf\u7a0b\u901a\u4fe1"},l=void 0,r={unversionedId:"java/Concurrency/thread_signaling",id:"java/Concurrency/thread_signaling",title:"\u7ebf\u7a0b\u901a\u4fe1",description:"\u7ebf\u7a0b\u901a\u4fe1\u7684\u76ee\u6807\u662f\u4f7f\u7ebf\u7a0b\u95f4\u80fd\u591f\u4e92\u76f8\u53d1\u9001\u4fe1\u53f7\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u7ebf\u7a0b\u901a\u4fe1\u4f7f\u7ebf\u7a0b\u80fd\u591f\u7b49\u5f85\u5176\u4ed6\u7ebf\u7a0b\u7684\u4fe1\u53f7\u3002",source:"@site/docs/java/Concurrency/thread_signaling.md",sourceDirName:"java/Concurrency",slug:"/java/Concurrency/thread_signaling",permalink:"/wiki/docs/java/Concurrency/thread_signaling",draft:!1,tags:[],version:"current",frontMatter:{id:"thread_signaling",title:"\u7ebf\u7a0b\u901a\u4fe1"},sidebar:"docs",previous:{title:"Java TheadLocal",permalink:"/wiki/docs/java/Concurrency/threadLocal"},next:{title:"JVM\u5185\u5b58\u5206\u914d\u4f18\u5316",permalink:"/wiki/docs/java/profiling/jmm_profiling"}},c={},s=[{value:"\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u901a\u4fe1",id:"\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u901a\u4fe1",level:2},{value:"\u5fd9\u7b49\u5f85(Busy Wait)",id:"\u5fd9\u7b49\u5f85busy-wait",level:2},{value:"wait(),notify()\u548cnotifyAll()",id:"waitnotify\u548cnotifyall",level:2},{value:"\u4e22\u5931\u7684\u4fe1\u53f7\uff08Missed Signals\uff09",id:"\u4e22\u5931\u7684\u4fe1\u53f7missed-signals",level:2},{value:"\u865a\u5047\u5524\u9192",id:"\u865a\u5047\u5524\u9192",level:2},{value:"\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u76f8\u540c\u4fe1\u53f7",id:"\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u76f8\u540c\u4fe1\u53f7",level:2},{value:"\u4e0d\u8981\u5728\u5b57\u7b26\u4e32\u5e38\u91cf\u6216\u5168\u5c40\u5bf9\u8c61\u4e2d\u8c03\u7528wait()",id:"\u4e0d\u8981\u5728\u5b57\u7b26\u4e32\u5e38\u91cf\u6216\u5168\u5c40\u5bf9\u8c61\u4e2d\u8c03\u7528wait",level:2}],u={toc:s};function p(n){let{components:t,...o}=n;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7ebf\u7a0b\u901a\u4fe1\u7684\u76ee\u6807\u662f\u4f7f\u7ebf\u7a0b\u95f4\u80fd\u591f\u4e92\u76f8\u53d1\u9001\u4fe1\u53f7\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u7ebf\u7a0b\u901a\u4fe1\u4f7f\u7ebf\u7a0b\u80fd\u591f\u7b49\u5f85\u5176\u4ed6\u7ebf\u7a0b\u7684\u4fe1\u53f7\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u901a\u4fe1"},"\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u901a\u4fe1"),(0,i.kt)("p",null,"\u7ebf\u7a0b\u95f4\u53d1\u9001\u4fe1\u53f7\u7684\u4e00\u4e2a\u7b80\u5355\u65b9\u5f0f\u662f\u5728\u5171\u4eab\u5bf9\u8c61\u7684\u53d8\u91cf\u91cc\u8bbe\u7f6e\u4fe1\u53f7\u503c\u3002\n\u4e0b\u9762\u7b80\u5355\u7684\u4f8b\u5b50\u4f7f\u7528\u4e86\u4e00\u4e2a\u6301\u6709\u4fe1\u53f7\u7684\u5bf9\u8c61\uff0c\u5e76\u63d0\u4f9b\u4e86set\u548ccheck\u65b9\u6cd5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MySignal{\n\n  protected boolean hasDataToProcess = false;\n\n  public synchronized boolean hasDataToProcess(){\n    return this.hasDataToProcess;\n  }\n\n  public synchronized void setHasDataToProcess(boolean hasData){\n    this.hasDataToProcess = hasData;\n  }\n}\n")),(0,i.kt)("p",null,"\u7ebf\u7a0bA\u5728\u4e00\u4e2a\u540c\u6b65\u5757\u91cc\u8bbe\u7f6eboolean\u578b\u6210\u5458\u53d8\u91cfhasDataToProcess\u4e3atrue\uff0c\u7ebf\u7a0bB\u4e5f\u5728\u540c\u6b65\u5757\u91cc\u8bfb\u53d6hasDataToProcess\u8fd9\u4e2a\u6210\u5458\u53d8\u91cf\u3002\n\u7ebf\u7a0bA\u548cB\u5fc5\u987b\u83b7\u5f97\u6307\u5411\u4e00\u4e2aMySignal\u5171\u4eab\u5b9e\u4f8b\u7684\u5f15\u7528\uff0c\u4ee5\u4fbf\u8fdb\u884c\u901a\u4fe1\u3002\u5982\u679c\u5b83\u4eec\u6301\u6709\u7684\u5f15\u7528\u6307\u5411\u4e0d\u540c\u7684MySingal\u5b9e\u4f8b\uff0c\u90a3\u4e48\u5f7c\u6b64\u5c06\u4e0d\u80fd\u68c0\u6d4b\u5230\u5bf9\u65b9\u7684\u4fe1\u53f7\u3002"),(0,i.kt)("h2",{id:"\u5fd9\u7b49\u5f85busy-wait"},"\u5fd9\u7b49\u5f85(Busy Wait)"),(0,i.kt)("p",null,"\u51c6\u5907\u5904\u7406\u6570\u636e\u7684\u7ebf\u7a0bB\u6b63\u5728\u7b49\u5f85\u6570\u636e\u53d8\u4e3a\u53ef\u7528\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u5728\u7b49\u5f85\u7ebf\u7a0bA\u7684\u4e00\u4e2a\u4fe1\u53f7\u3002\u8fd9\u4e2a\u4fe1\u53f7\u4f7fhasDataToProcess()\u8fd4\u56detrue\u3002\u7ebf\u7a0bB\u8fd0\u884c\u5728\u4e00\u4e2a\u5faa\u73af\u91cc\uff0c\u4ee5\u7b49\u5f85\u8fd9\u4e2a\u4fe1\u53f7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"while(!sharedSignal.hasDataToProcess()){\n  //do nothing... busy waiting\n}\n")),(0,i.kt)("h2",{id:"waitnotify\u548cnotifyall"},"wait(),notify()\u548cnotifyAll()"),(0,i.kt)("p",null,"\u5fd9\u7b49\u5f85\u6ca1\u6709\u5bf9\u8fd0\u884c\u7b49\u5f85\u7ebf\u7a0b\u7684CPU\u8fdb\u884c\u6709\u6548\u7684\u5229\u7528\uff0c\u9664\u975e\u5e73\u5747\u7b49\u5f85\u65f6\u95f4\u975e\u5e38\u77ed\u3002\u5426\u5219\uff0c\u8ba9\u7b49\u5f85\u7ebf\u7a0b\u8fdb\u5165\u7761\u7720\u6216\u8005\u975e\u8fd0\u884c\u72b6\u6001\u66f4\u4e3a\u660e\u667a\uff0c\u76f4\u5230\u5b83\u63a5\u6536\u5230\u5b83\u7b49\u5f85\u7684\u4fe1\u53f7\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u7ebf\u7a0b\u4e00\u65e6\u8c03\u7528\u4e86\u4efb\u610f\u5bf9\u8c61\u7684wait()\u65b9\u6cd5\uff0c\u5c31\u4f1a\u53d8\u4e3a\u975e\u8fd0\u884c\u72b6\u6001\uff0c\u76f4\u5230\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528\u4e86\u540c\u4e00\u4e2a\u5bf9\u8c61\u7684notify()\u65b9\u6cd5\u3002\u4e3a\u4e86\u8c03\u7528wait()\u6216\u8005notify()\uff0c\u7ebf\u7a0b\u5fc5\u987b\u5148\u83b7\u5f97\u90a3\u4e2a\u5bf9\u8c61\u7684\u9501\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7ebf\u7a0b\u5fc5\u987b\u5728\u540c\u6b65\u5757\u91cc\u8c03\u7528wait()\u6216\u8005notify()\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class MonitorObject{\n}\n\npublic class MyWaitNotify{\n\n  MonitorObject myMonitorObject = new MonitorObject();\n\n  public void doWait(){\n    synchronized(myMonitorObject){\n      try{\n        myMonitorObject.wait();\n      } catch(InterruptedException e){...}\n    }\n  }\n\n  public void doNotify(){\n    synchronized(myMonitorObject){\n      myMonitorObject.notify();\n    }\n  }\n}\n")),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528\u4e00\u4e2a\u5bf9\u8c61\u7684notify()\u65b9\u6cd5\uff0c\u6b63\u5728\u7b49\u5f85\u8be5\u5bf9\u8c61\u7684\u6240\u6709\u7ebf\u7a0b\u4e2d\u5c06\u6709\u4e00\u4e2a\u7ebf\u7a0b\u88ab\u5524\u9192\u5e76\u5141\u8bb8\u6267\u884c\uff08\u8fd9\u4e2a\u5c06\u88ab\u5524\u9192\u7684\u7ebf\u7a0b\u662f\u968f\u673a\u7684\uff0c\u4e0d\u53ef\u4ee5\u6307\u5b9a\u5524\u9192\u54ea\u4e2a\u7ebf\u7a0b\uff09\u3002\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2anotifyAll()\u65b9\u6cd5\u6765\u5524\u9192\u6b63\u5728\u7b49\u5f85\u4e00\u4e2a\u7ed9\u5b9a\u5bf9\u8c61\u7684\u6240\u6709\u7ebf\u7a0b\u3002"),(0,i.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u4e0d\u7ba1\u662f\u7b49\u5f85\u7ebf\u7a0b\u8fd8\u662f\u5524\u9192\u7ebf\u7a0b\u90fd\u5728\u540c\u6b65\u5757\u91cc\u8c03\u7528wait()\u548cnotify()\u3002\u8fd9\u662f\u5f3a\u5236\u6027\u7684\uff01\u4e00\u4e2a\u7ebf\u7a0b\u5982\u679c\u6ca1\u6709\u6301\u6709\u5bf9\u8c61\u9501\uff0c\u5c06\u4e0d\u80fd\u8c03\u7528wait()\uff0cnotify()\u6216\u8005notifyAll()\u3002\u5426\u5219\uff0c\u4f1a\u629b\u51faIllegalMonitorStateException\u5f02\u5e38\uff08JVM\u662f\u8fd9\u4e48\u5b9e\u73b0\u7684\uff0c\u5f53\u4f60\u8c03\u7528wait\u65f6\u5019\u5b83\u9996\u5148\u8981\u68c0\u67e5\u4e0b\u5f53\u524d\u7ebf\u7a0b\u662f\u5426\u662f\u9501\u7684\u62e5\u6709\u8005\uff0c\u4e0d\u662f\u5219\u629b\u51faIllegalMonitorStateExcept\uff09"),(0,i.kt)("h2",{id:"\u4e22\u5931\u7684\u4fe1\u53f7missed-signals"},"\u4e22\u5931\u7684\u4fe1\u53f7\uff08Missed Signals\uff09"),(0,i.kt)("p",null,"notify()\u548cnotifyAll()\u65b9\u6cd5\u4e0d\u4f1a\u4fdd\u5b58\u8c03\u7528\u5b83\u4eec\u7684\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5f53\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\uff0c\u6709\u53ef\u80fd\u6ca1\u6709\u7ebf\u7a0b\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\u3002\u901a\u77e5\u4fe1\u53f7\u8fc7\u540e\u4fbf\u4e22\u5f03\u4e86\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u5148\u4e8e\u88ab\u901a\u77e5\u7ebf\u7a0b\u8c03\u7528wait()\u524d\u8c03\u7528\u4e86notify()\uff0c\u7b49\u5f85\u7684\u7ebf\u7a0b\u5c06\u9519\u8fc7\u8fd9\u4e2a\u4fe1\u53f7\u3002\u8fd9\u53ef\u80fd\u662f\u4e5f\u53ef\u80fd\u4e0d\u662f\u4e2a\u95ee\u9898\u3002\u4e0d\u8fc7\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u53ef\u80fd\u4f7f\u7b49\u5f85\u7ebf\u7a0b\u6c38\u8fdc\u5728\u7b49\u5f85\uff0c\u4e0d\u518d\u9192\u6765\uff0c\u56e0\u4e3a\u7ebf\u7a0b\u9519\u8fc7\u4e86\u5524\u9192\u4fe1\u53f7\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MyWaitNotify2{\n\n  MonitorObject myMonitorObject = new MonitorObject();\n  boolean wasSignalled = false;\n\n  public void doWait(){\n    synchronized(myMonitorObject){\n      if(!wasSignalled){\n        try{\n          myMonitorObject.wait();\n         } catch(InterruptedException e){...}\n      }\n      //clear signal and continue running.\n      wasSignalled = false;\n    }\n  }\n\n  public void doNotify(){\n    synchronized(myMonitorObject){\n      wasSignalled = true;\n      myMonitorObject.notify();\n    }\n  }\n}\n")),(0,i.kt)("p",null,"\u7559\u610fdoNotify()\u65b9\u6cd5\u5728\u8c03\u7528notify()\u524d\u628awasSignalled\u53d8\u91cf\u8bbe\u4e3atrue\u3002\u540c\u65f6\uff0c\u7559\u610fdoWait()\u65b9\u6cd5\u5728\u8c03\u7528wait()\u524d\u4f1a\u68c0\u67e5wasSignalled\u53d8\u91cf\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5982\u679c\u6ca1\u6709\u4fe1\u53f7\u5728\u524d\u4e00\u6b21doWait()\u8c03\u7528\u548c\u8fd9\u6b21doWait()\u8c03\u7528\u4e4b\u95f4\u7684\u65f6\u95f4\u6bb5\u91cc\u88ab\u63a5\u6536\u5230\uff0c\u5b83\u5c06\u53ea\u8c03\u7528wait()\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u4fe1\u53f7\u4e22\u5931\uff0c \u7528\u4e00\u4e2a\u53d8\u91cf\u6765\u4fdd\u5b58\u662f\u5426\u88ab\u901a\u77e5\u8fc7\u3002\u5728notify\u524d\uff0c\u8bbe\u7f6e\u81ea\u5df1\u5df2\u7ecf\u88ab\u901a\u77e5\u8fc7\u3002\u5728wait\u540e\uff0c\u8bbe\u7f6e\u81ea\u5df1\u6ca1\u6709\u88ab\u901a\u77e5\u8fc7\uff0c\u9700\u8981\u7b49\u5f85\u901a\u77e5.")),(0,i.kt)("h2",{id:"\u865a\u5047\u5524\u9192"},"\u865a\u5047\u5524\u9192"),(0,i.kt)("p",null,"\u4e00\u822c\u800c\u8a00\u7ebf\u7a0b\u8c03\u7528wait()\u65b9\u6cd5\u540e\uff0c\u9700\u8981\u5176\u4ed6\u7ebf\u7a0b\u8c03\u7528notify(),notifyAll()\u65b9\u6cd5\u540e\uff0c\u7ebf\u7a0b\u624d\u4f1a\u4ecewait\u65b9\u6cd5\u4e2d\u8fd4\u56de\uff0c \u800c\u865a\u5047\u5524\u9192(spurious wakeup)\u662f\u6307\u7ebf\u7a0b\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\uff0c\u4ecewait\u65b9\u6cd5\u4e2d\u8fd4\u56de\u3002"),(0,i.kt)("p",null,"\u4ec0\u4e48\u539f\u56e0\u4f1a\u5bfc\u81f4\u865a\u5047\u5524\u9192?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e2d\u65ad\u7b49\u4e0d\u53ef\u907f\u514d\u7684bug"),(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5c42\u9762\u5f00\u53d1\u8005\u8bbe\u8ba1\u7684\u95ee\u9898")),(0,i.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u5047\u5524\u9192\uff0c\u4fdd\u5b58\u4fe1\u53f7\u7684\u6210\u5458\u53d8\u91cf\u5c06\u5728\u4e00\u4e2awhile\u5faa\u73af\u91cc\u63a5\u53d7\u68c0\u67e5\uff0c\u800c\u4e0d\u662f\u5728if\u8868\u8fbe\u5f0f\u91cc\u3002\u8fd9\u6837\u7684\u4e00\u4e2awhile\u5faa\u73af\u53eb\u505a\u81ea\u65cb\u9501."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MyWaitNotify3{\n\n  MonitorObject myMonitorObject = new MonitorObject();\n  boolean wasSignalled = false;\n\n  public void doWait(){\n    synchronized(myMonitorObject){\n      while(!wasSignalled){\n        try{\n          myMonitorObject.wait();\n         } catch(InterruptedException e){...}\n      }\n      //clear signal and continue running.\n      wasSignalled = false;\n    }\n  }\n\n  public void doNotify(){\n    synchronized(myMonitorObject){\n      wasSignalled = true;\n      myMonitorObject.notify();\n    }\n  }\n}\n\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u505a\u6cd5\u8981\u614e\u91cd\uff0c\u76ee\u524d\u7684JVM\u5b9e\u73b0\u81ea\u65cb\u4f1a\u6d88\u8017CPU\uff0c\u5982\u679c\u957f\u65f6\u95f4\u4e0d\u8c03\u7528doNotify\u65b9\u6cd5\uff0cdoWait\u65b9\u6cd5\u4f1a\u4e00\u76f4\u81ea\u65cb\uff0cCPU\u4f1a\u6d88\u8017\u592a\u5927\u3002")),(0,i.kt)("p",null,"\u88ab\u5524\u9192\u7684\u7ebf\u7a0b\u4f1a\u81ea\u65cb\u76f4\u5230\u81ea\u65cb\u9501(while\u5faa\u73af)\u91cc\u7684\u6761\u4ef6\u53d8\u4e3afalse\u3002"),(0,i.kt)("h2",{id:"\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u76f8\u540c\u4fe1\u53f7"},"\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u76f8\u540c\u4fe1\u53f7"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u7ebf\u7a0b\u5728\u7b49\u5f85\uff0c\u88abnotifyAll()\u5524\u9192\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u88ab\u5141\u8bb8\u7ee7\u7eed\u6267\u884c\uff0c\u4f7f\u7528while\u5faa\u73af\u4e5f\u662f\u4e2a\u597d\u65b9\u6cd5\u3002\u6bcf\u6b21\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u83b7\u5f97\u76d1\u89c6\u5668\u5bf9\u8c61\u9501\uff0c\u610f\u5473\u7740\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u9000\u51fawait()\u8c03\u7528\u5e76\u6e05\u9664wasSignalled\u6807\u5fd7\uff08\u8bbe\u4e3afalse\uff09\u3002\u4e00\u65e6\u8fd9\u4e2a\u7ebf\u7a0b\u9000\u51fadoWait()\u7684\u540c\u6b65\u5757\uff0c\u5176\u4ed6\u7ebf\u7a0b\u9000\u51fawait()\u8c03\u7528\uff0c\u5e76\u5728while\u5faa\u73af\u91cc\u68c0\u67e5wasSignalled\u53d8\u91cf\u503c\u3002\u4f46\u662f\uff0c\u8fd9\u4e2a\u6807\u5fd7\u5df2\u7ecf\u88ab\u7b2c\u4e00\u4e2a\u5524\u9192\u7684\u7ebf\u7a0b\u6e05\u9664\u4e86\uff0c\u6240\u4ee5\u5176\u4f59\u9192\u6765\u7684\u7ebf\u7a0b\u5c06\u56de\u5230\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u4e0b\u6b21\u4fe1\u53f7\u5230\u6765\u3002"),(0,i.kt)("h2",{id:"\u4e0d\u8981\u5728\u5b57\u7b26\u4e32\u5e38\u91cf\u6216\u5168\u5c40\u5bf9\u8c61\u4e2d\u8c03\u7528wait"},"\u4e0d\u8981\u5728\u5b57\u7b26\u4e32\u5e38\u91cf\u6216\u5168\u5c40\u5bf9\u8c61\u4e2d\u8c03\u7528wait()"),(0,i.kt)("p",null,"\u5b57\u7b26\u4e32\u5e38\u91cf"),(0,i.kt)("p",null,"\u5b57\u7b26\u4e32\u5e38\u91cf\u5728\u7a7a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u9501\u7684\u540c\u6b65\u5757(\u6216\u8005\u5176\u4ed6\u5e38\u91cf\u5b57\u7b26\u4e32)\u91cc\u8c03\u7528wait()\u548cnotify()\u4ea7\u751f\u7684\u95ee\u9898\u662f\uff0cJVM/\u7f16\u8bd1\u5668\u5185\u90e8\u4f1a\u628a\u5e38\u91cf\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c\u5373\u4f7f\u4f60\u67092\u4e2a\u4e0d\u540c\u7684MyWaitNotify\u5b9e\u4f8b\uff0c\u5b83\u4eec\u90fd\u5f15\u7528\u4e86\u76f8\u540c\u7684\u7a7a\u5b57\u7b26\u4e32\u5b9e\u4f8b\u3002\u540c\u65f6\u4e5f\u610f\u5473\u7740\u5b58\u5728\u8fd9\u6837\u7684\u98ce\u9669\uff1a\u5728\u7b2c\u4e00\u4e2aMyWaitNotify\u5b9e\u4f8b\u4e0a\u8c03\u7528doWait()\u7684\u7ebf\u7a0b\u4f1a\u88ab\u5728\u7b2c\u4e8c\u4e2aMyWaitNotify\u5b9e\u4f8b\u4e0a\u8c03\u7528doNotify()\u7684\u7ebf\u7a0b\u5524\u9192\u3002\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u753b\u6210\u4ee5\u4e0b\u8fd9\u5f20\u56fe:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"thread_signale.png",src:e(8259).Z,width:"364",height:"291"})))}p.isMDXComponent=!0},8259:(n,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/thread_signale-5034fd99f7fc9b201611ec234218c97b.png"}}]);