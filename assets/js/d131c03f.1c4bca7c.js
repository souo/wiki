"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[9795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=i,f=s["".concat(p,".").concat(u)]||s[u]||g[u]||a;return n?r.createElement(f,l(l({ref:t},y),{},{components:n})):r.createElement(f,l({ref:t},y))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"Flyweight",title:"\u4eab\u5143\u6a21\u5f0f"},l=void 0,o={unversionedId:"java/design_pattern/Flyweight",id:"java/design_pattern/Flyweight",title:"\u4eab\u5143\u6a21\u5f0f",description:"\u4eab\u5143\u6a21\u5f0f\u7684\u539f\u7406",source:"@site/docs/java/design_pattern/Flyweight.md",sourceDirName:"java/design_pattern",slug:"/java/design_pattern/Flyweight",permalink:"/wiki/docs/java/design_pattern/Flyweight",draft:!1,tags:[],version:"current",frontMatter:{id:"Flyweight",title:"\u4eab\u5143\u6a21\u5f0f"}},p={},c=[{value:"\u4eab\u5143\u6a21\u5f0f\u7684\u539f\u7406",id:"\u4eab\u5143\u6a21\u5f0f\u7684\u539f\u7406",level:2},{value:"\u4eab\u5143\u6a21\u5f0f\u7684\u5b9e\u73b0",id:"\u4eab\u5143\u6a21\u5f0f\u7684\u5b9e\u73b0",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2}],y={toc:c};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4eab\u5143\u6a21\u5f0f\u7684\u539f\u7406"},"\u4eab\u5143\u6a21\u5f0f\u7684\u539f\u7406"),(0,i.kt)("p",null,"\u6240\u8c13\u201c\u4eab\u5143\u201d\uff0c\u987e\u540d\u601d\u4e49\u5c31\u662f\u88ab\u5171\u4eab\u7684\u5355\u5143\u3002\u4eab\u5143\u6a21\u5f0f\u7684\u610f\u56fe\u662f\u590d\u7528\u5bf9\u8c61\uff0c\u8282\u7701\u5185\u5b58\uff0c\u524d\u63d0\u662f\u4eab\u5143\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\u3002\u5177\u4f53\u6765\u8bb2\uff0c\u5f53\u4e00\u4e2a\u7cfb\u7edf\u4e2d\u5b58\u5728\u5927\u91cf\u91cd\u590d\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5229\u7528\u4eab\u5143\u6a21\u5f0f\uff0c\u5c06\u5bf9\u8c61\u8bbe\u8ba1\u6210\u4eab\u5143\uff0c\u5728\u5185\u5b58\u4e2d\u53ea\u4fdd\u7559\u4e00\u4efd\u5b9e\u4f8b\uff0c\u4f9b\u591a\u5904\u4ee3\u7801\u5f15\u7528\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u5185\u5b58\u4e2d\u5bf9\u8c61\u7684\u6570\u91cf\uff0c\u4ee5\u8d77\u5230\u8282\u7701\u5185\u5b58\u7684\u76ee\u7684\u3002 "),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4e0d\u4ec5\u4ec5\u76f8\u540c\u5bf9\u8c61\u53ef\u4ee5\u8bbe\u8ba1\u6210\u4eab\u5143\uff0c\u5bf9\u4e8e\u76f8\u4f3c\u5bf9\u8c61\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u5bf9\u8c61\u4e2d\u76f8\u540c\u7684\u90e8\u5206\uff08\u5b57\u6bb5\uff09\uff0c\u63d0\u53d6\u51fa\u6765\u8bbe\u8ba1\u6210\u4eab\u5143\uff0c\u8ba9\u8fd9\u4e9b\u5927\u91cf\u76f8\u4f3c\u5bf9\u8c61\u5f15\u7528\u8fd9\u4e9b\u4eab\u5143\u3002"),(0,i.kt)("h2",{id:"\u4eab\u5143\u6a21\u5f0f\u7684\u5b9e\u73b0"},"\u4eab\u5143\u6a21\u5f0f\u7684\u5b9e\u73b0"),(0,i.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u7684\u4ee3\u7801\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u901a\u8fc7\u5de5\u5382\u6a21\u5f0f\uff0c\u5728\u5de5\u5382\u7c7b\u4e2d\uff0c\u901a\u8fc7\u4e00\u4e2a Map \u6216\u8005 List \u6765\u7f13\u5b58\u5df2\u7ecf\u521b\u5efa\u597d\u7684\u4eab\u5143\u5bf9\u8c61\uff0c\u4ee5\u8fbe\u5230\u590d\u7528\u7684\u76ee\u7684\u3002"),(0,i.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u4e00\u822c\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u4e3a Flyweight\uff08\u62bd\u8c61\u4eab\u5143\u7c7b\uff09\u3001ConcreteFlyweight\uff08\u5177\u4f53\u4eab\u5143\u7c7b\uff09\u548c FlyweightFactory\uff08\u4eab\u5143\u5de5\u5382\u7c7b\uff09\u3002\u62bd\u8c61\u4eab\u5143\u7c7b\u901a\u5e38\u662f\u4e00\u4e2a\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b\uff0c\u5411\u5916\u754c\u63d0\u4f9b\u4eab\u5143\u5bf9\u8c61\u7684\u5185\u90e8\u6570\u636e\u6216\u5916\u90e8\u6570\u636e\uff1b\u5177\u4f53\u4eab\u5143\u7c7b\u662f\u6307\u5177\u4f53\u5b9e\u73b0\u5185\u90e8\u6570\u636e\u5171\u4eab\u7684\u7c7b\uff1b\u4eab\u5143\u5de5\u5382\u7c7b\u5219\u662f\u4e3b\u8981\u7528\u4e8e\u521b\u5efa\u548c\u7ba1\u7406\u4eab\u5143\u5bf9\u8c61\u7684\u5de5\u5382\u7c7b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n//\u62bd\u8c61\u4eab\u5143\u7c7b\ninterface Flyweight {\n    //\u5bf9\u5916\u72b6\u6001\u5bf9\u8c61\n    void operation(String name);\n    //\u5bf9\u5185\u5bf9\u8c61\n    String getType();\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n//\u5177\u4f53\u4eab\u5143\u7c7b\nclass ConcreteFlyweight implements Flyweight {\n    private String type;\n\n    public ConcreteFlyweight(String type) {\n        this.type = type;\n    }\n\n    @Override\n    public void operation(String name) {\n        System.out.printf("[\u7c7b\u578b(\u5185\u5728\u72b6\u6001)] - [%s] - [\u540d\u5b57(\u5916\u5728\u72b6\u6001)] - [%s]\\n", type, name);\n    }\n\n    @Override\n    public String getType() {\n        return type;\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n//\u4eab\u5143\u5de5\u5382\u7c7b\nclass FlyweightFactory {\n    private static final Map<String, Flyweight> FLYWEIGHT_MAP = new HashMap<>();//\u4eab\u5143\u6c60\uff0c\u7528\u6765\u5b58\u50a8\u4eab\u5143\u5bf9\u8c61\n\n    public static Flyweight getFlyweight(String type) {\n        if (FLYWEIGHT_MAP.containsKey(type)) {//\u5982\u679c\u5728\u4eab\u5143\u6c60\u4e2d\u5b58\u5728\u5bf9\u8c61\uff0c\u5219\u76f4\u63a5\u83b7\u53d6\n            return FLYWEIGHT_MAP.get(type);\n        } else {//\u5728\u54cd\u5e94\u6c60\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u521b\u5efa\u5bf9\u8c61\uff0c\u5e76\u653e\u5165\u5230\u4eab\u5143\u6c60\n            ConcreteFlyweight flyweight = new ConcreteFlyweight(type);\n            FLYWEIGHT_MAP.put(type, flyweight);\n            return flyweight;\n        }\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class Client {\n\n    public static void main(String[] args) {\n        Flyweight fw0 = FlyweightFactory.getFlyweight("a");\n        Flyweight fw1 = FlyweightFactory.getFlyweight("b");\n        Flyweight fw2 = FlyweightFactory.getFlyweight("a");\n        Flyweight fw3 = FlyweightFactory.getFlyweight("b");\n        fw1.operation("abc");\n        System.out.printf("[\u7ed3\u679c(\u5bf9\u8c61\u5bf9\u6bd4)] - [%s]\\n", fw0 == fw2);\n        System.out.printf("[\u7ed3\u679c(\u5185\u5728\u72b6\u6001)] - [%s]\\n", fw1.getType());\n    }\n}\n')),(0,i.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u4eab\u5143\u6a21\u5f0f\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u7684\u5e94\u7528\u4e5f\u975e\u5e38\u5e7f\u6cdb\u3002\u4f8b\u5982 Java \u7684 String \u5b57\u7b26\u4e32\uff0c\u5728\u4e00\u4e9b\u5b57\u7b26\u4e32\u5e38\u91cf\u4e2d\uff0c\u4f1a\u5171\u4eab\u5e38\u91cf\u6c60\u4e2d\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u4ece\u800c\u51cf\u5c11\u91cd\u590d\u521b\u5efa\u76f8\u540c\u503c\u5bf9\u8c61\uff0c\u5360\u7528\u5185\u5b58\u7a7a\u95f4\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\uff0c\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7684\u5e94\u7528\u3002\u4f8b\u5982\uff0c\u7ebf\u7a0b\u6c60\u5c31\u662f\u4eab\u5143\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u73b0\uff1b\u5c06\u5546\u54c1\u5b58\u50a8\u5728\u5e94\u7528\u670d\u52a1\u7684\u7f13\u5b58\u4e2d\uff0c\u90a3\u4e48\u6bcf\u5f53\u7528\u6237\u83b7\u53d6\u5546\u54c1\u4fe1\u606f\u65f6\uff0c\u5219\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u4ece redis \u7f13\u5b58\u6216\u8005\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u5546\u54c1\u4fe1\u606f\uff0c\u5e76\u5728\u5185\u5b58\u4e2d\u91cd\u590d\u521b\u5efa\u5546\u54c1\u4fe1\u606f\u4e86\u3002"))}g.isMDXComponent=!0}}]);