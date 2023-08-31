var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,n=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e},o=(e,s)=>t(e,a(s)),c=(e,t,a)=>new Promise(((s,i)=>{var r=e=>{try{n(a.next(e))}catch(t){i(t)}},l=e=>{try{n(a.throw(e))}catch(t){i(t)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,l);n((a=a.apply(e,t)).next())}));import{x as d,C as m,Z as p,a7 as u,e as h,o as v,c as g,a as f,u as y,L as _,ak as w,a9 as x,z as L,M as k,U as b,S as M,a6 as P,W as z,ap as j,aq as C,h as I,ab as E,R as V,P as A,a8 as S,O,f as T,n as $,X as q,Q as R,Y as H,as as U,T as B,at as D}from"./@vue-06d7d904.js";import{E as K,a as N,b as F,c as Z,d as G,e as W,f as X,g as Q,h as Y,i as J,j as ee,k as te,l as ae,m as se}from"./element-plus-2073bb18.js";import{d as ie,c as re}from"./pinia-da509d88.js";import{i as le}from"./pinia-plugin-persist-70d140bd.js";import{a as ne}from"./axios-a8ee11a1.js";import{u as oe,c as ce,a as de}from"./vue-router-f9877ca9.js";import"./@element-plus-788c49e3.js";import"./@vueuse-45103712.js";import"./lodash-es-57caac06.js";import"./@ctrl-91de2ec7.js";import"./@popperjs-b78c3215.js";import"./escape-html-2f7c2e90.js";import"./dayjs-4d0ffb58.js";import"./normalize-wheel-es-3222b0a2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const me="#409EFF",pe=ie({id:"GlobalState",state:()=>({userInfo:{id:1,username:"yxcr",avatar:"https://img2.baidu.com/it/u=2979343759,1090469389&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},isLogin:!1,qrKey:"",themeConfig:{primary:me,isDark:!1},anthologyObj:{}}),getters:{doubleCount:e=>2*e.count},actions:{change(){this.count+=2,this.msg="哈哈哈"},setThemeConfig(e){this.themeConfig=e},setAnthologyObj(e){this.anthologyObj=e}},persist:{enabled:!0,strategies:[{paths:["themeConfig"],storage:localStorage}]}}),ue=re();function he(e){let t="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return K.warning("输入错误的hex");t=(e=e.replace("#","")).match(/../g);for(let a=0;a<3;a++)t[a]=parseInt(t[a],16);return t}function ve(e,t,a){let s=/^\d{1,3}$/;if(!s.test(e)||!s.test(t)||!s.test(a))return K.warning("输入错误的rgb颜色值");let i=[e.toString(16),t.toString(16),a.toString(16)];for(let r=0;r<3;r++)1==i[r].length&&(i[r]=`0${i[r]}`);return`#${i.join("")}`}function ge(e,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return K.warning("输入错误的hex颜色值");let a=he(e);for(let s=0;s<3;s++)a[s]=Math.floor((255-a[s])*t+a[s]);return ve(a[0],a[1],a[2])}ue.use(le);const fe=()=>{const e=pe(),t=d((()=>e.themeConfig)),a=()=>{const e=document.documentElement;t.value.isDark?e.setAttribute("class","dark"):e.setAttribute("class","")},s=a=>{a||(a=me,K({type:"success",message:`主题颜色已重置为 ${me}`})),e.setThemeConfig(o(n({},t.value),{primary:a})),document.documentElement.style.setProperty("--el-color-primary-dark-2",`${function(e,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return K.warning("输入错误的hex颜色值");let a=he(e);for(let s=0;s<3;s++)a[s]=Math.floor(a[s]*(1-t));return ve(a[0],a[1],a[2])}(t.value.primary,.1)}`),document.documentElement.style.setProperty("--el-color-primary",t.value.primary);for(let e=1;e<=9;e++)document.documentElement.style.setProperty(`--el-color-primary-light-${e}`,`${ge(t.value.primary,e/10)}`)};return m((()=>{a(),s(t.value.primary)})),{switchDark:a,changePrimary:s}},ye=ne.create({baseURL:"https://www.xiangzi77.tk/",changeOrigin:!0,withCredentials:!0});ye.interceptors.request.use((e=>("post"==e.method?e.data=o(n({},e.data),{timestamp:Date.parse(new Date)/1e3}):"get"==e.method&&(e.params=n({timestamp:Date.parse(new Date)/1e3},e.params)),e)),(e=>Promise.reject(e))),ye.interceptors.response.use((e=>e),(function(e){return Promise.reject(e)}));const _e=e=>ye.get(`cloudsearch?keywords=${e.keywords}&limit=${e.limit}&offset=${e.offset}&type=${e.type}`),we=e=>ye.get(`song/url/v1?id=${e.id}&level=exhigh`),xe=e=>ye.get(`mv/url?id=${e.id}`),Le=e=>ye.get(`top/playlist?limit=${e.limit}&offset=${e.offset}`),ke=e=>ye.get(`/comment/mv?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),be=()=>ye.get("/personalized/newsong"),Me=()=>ye.get("/mv/first"),Pe=e=>ye.get(`/mv/detail?mvid=${e}`),ze=e=>ye.get(`/dj/hot?limit=${e.limit}&offset=${e.offset}`),je=e=>ye.get(`/playlist/detail?id=${e}`),Ce=e=>ye.get(`/comment/playlist?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),Ie=()=>ye.post("login/status"),Ee=()=>ye.get("recommend/songs"),Ve=()=>ye.post("/login/qr/key"),Ae=e=>ye.post("/login/qr/create",e),Se=e=>ye.post("/video/search",e),Oe=e=>ye.post("/video/chapter",e),Te=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a},$e=e=>(j("data-v-86d679f6"),e=e(),C(),e),qe={class:"header"},Re=$e((()=>f("div",{class:"menu-circle"},null,-1))),He={class:"header-menu"},Ue=[$e((()=>f("svg",{t:"1648618382129",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2830",width:"32",height:"32"},[f("path",{d:"M576 672c-6.4 0-19.2 0-25.6-6.4l-128-128c-12.8-12.8-12.8-32 0-44.8l128-128c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L492.8 512l102.4 102.4c12.8 12.8 12.8 32 0 44.8C595.2 672 582.4 672 576 672z","p-id":"2831",fill:"#525B72"})],-1)))],Be={class:"search-bar"},De=["onKeyup"],Ke=$e((()=>f("div",{class:"about"},[f("a",{href:"https://github.com/XiangZi7/KM-Music-Player/",target:"_blank"},"github"),f("a",{href:"https://github.com/XiangZi7/",target:"_blank"},"about")],-1))),Ne={key:0,class:"header-profile"},Fe={class:"card"},Ze={class:"tools"},Ge={class:"circle"},We=$e((()=>f("div",{class:"circle"},[f("span",{class:"yellow box"})],-1))),Xe=$e((()=>f("div",{class:"circle"},[f("span",{class:"green box"})],-1))),Qe={class:"card__content"},Ye={class:"demo-login"},Je=["src"],et={class:"demo-login"},tt={class:"input-text"},at={key:1,class:"header-profile"},st=["src"],it={class:"username"},rt=$e((()=>f("div",{class:"notification"},[f("span",{class:"notification-number"},"3"),f("svg",{t:"1648737299278",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8950",width:"25",height:"25"},[f("path",{d:"M192.032 631.402667V404.725333C192.032 228.330667 335.285333 85.333333 512 85.333333s319.968 142.997333 319.968 319.392v226.677334l60.608 121.013333c10.645333 21.237333-4.832 46.218667-28.618667 46.218667H160.042667c-23.786667 0-39.253333-24.981333-28.618667-46.218667l60.608-121.013333z m620.16 103.36l-40.842667-81.536a31.893333 31.893333 0 0 1-3.381333-14.282667V404.725333c0-141.12-114.602667-255.509333-255.968-255.509333S256.032 263.605333 256.032 404.725333V638.933333c0 4.96-1.162667 9.845333-3.381333 14.293334l-40.842667 81.525333h600.384z m-443.306667 152.32a31.893333 31.893333 0 0 1-4.149333-44.981334 32.032 32.032 0 0 1 45.056-4.138666A159.36 159.36 0 0 0 512 874.773333a159.36 159.36 0 0 0 102.186667-36.8 32.032 32.032 0 0 1 45.056 4.138667 31.893333 31.893333 0 0 1-4.16 44.981333A223.402667 223.402667 0 0 1 512 938.666667c-52.981333 0-103.2-18.453333-143.114667-51.594667z","p-id":"8951",fill:"#525B72"})])],-1))),lt=Te({__name:"headerBar",setup(e){const t=pe(),a=oe(),s=p({list:[],kw:"",dialogVisible:!1,loginForm:{},loginPopup:!1,activeName:"first",qrimg:"",phone:""}),{list:i,kw:r,phone:l,dialogVisible:n,loginForm:o,loginPopup:m,activeName:j,qrimg:C}=u(s),I=d((()=>t.isLogin)),E=()=>{a.push({path:"/search",query:{keyWorks:r.value}})};h((()=>c(this,null,(function*(){Ie().then((e=>{e.data.data.account&&-10!=e.data.data.account.status?(t.isLogin=!0,t.userInfo=e.data.data.profile):(K.success({message:"登录会解锁更多功能哦~",type:"success"}),t.isLogin=!1)}))}))));const V=()=>c(this,null,(function*(){if(s.loginPopup=!0,!t.qrKey){const e=yield Ve();t.qrKey=e.data.data.unikey}const e=yield Ae({key:t.qrKey,qrimg:!0});s.qrimg=e.data.data.qrimg})),A=()=>c(this,null,(function*(){yield ye.get("/logout"),t.qrKey="",t.userInfo="",t.isLogin=!1})),S=()=>c(this,null,(function*(){const{data:e}=yield(e=>ye.post("/login/qr/check",e))({key:t.qrKey});if(800==e.code){const e=yield Ve();t.qrKey=e.data.data.unikey;const a=yield Ae({key:t.qrKey,qrimg:!0});s.qrimg=a.data.data.qrimg}else 803==e.code&&(Ie().then((e=>{-10==e.data.data.account.status?t.isLogin=!1:(t.isLogin=!0,t.userInfo=e.data.data.profile)})),s.loginPopup=!1)})),O=e=>{},T=()=>{};return(e,s)=>{const i=N,n=F,o=Z,c=G,d=W,p=X,u=Q;return v(),g("div",qe,[Re,f("div",He,[f("a",{class:"menu-link is-active",href:"javascript:;",onClick:s[0]||(s[0]=e=>y(a).back())},Ue)]),f("div",Be,[_(f("input",{type:"text",placeholder:"Search",onKeyup:x(E,["enter"]),"onUpdate:modelValue":s[1]||(s[1]=e=>L(r)?r.value=e:null)},null,40,De),[[w,y(r)]])]),Ke,y(I)?(v(),g("div",at,[b(u,null,{dropdown:M((()=>[b(p,null,{default:M((()=>[b(d,{onClick:A},{default:M((()=>[P("注销")])),_:1})])),_:1})])),default:M((()=>[f("img",{class:"profile-img",src:y(t).userInfo.avatarUrl,alt:""},null,8,st)])),_:1}),f("div",it,z(y(t).userInfo.nickname),1),rt])):(v(),g("div",Ne,[f("div",{class:"username"},[f("a",{href:"javascript:;",onClick:V},"登录")]),_(f("div",Fe,[f("div",Ze,[f("div",Ge,[f("span",{onClick:s[2]||(s[2]=e=>m.value=!1),class:"red box"})]),We,Xe]),f("div",Qe,[b(c,{modelValue:y(j),"onUpdate:modelValue":s[4]||(s[4]=e=>L(j)?j.value=e:null),class:"login-tabs",onTabClick:O},{default:M((()=>[b(n,{label:"二维码登录",name:"first"},{default:M((()=>[f("div",Ye,[f("img",{src:y(C),alt:""},null,8,Je)]),f("div",null,[b(i,{onClick:S,type:"primary",style:{width:"100%","margin-top":"20px"},round:""},{default:M((()=>[P("验证")])),_:1})])])),_:1}),b(n,{label:"Cookie登录",name:"second"},{default:M((()=>[f("div",et,[b(o,{type:"textarea",style:{width:"300px"},modelValue:y(l),"onUpdate:modelValue":s[3]||(s[3]=e=>L(l)?l.value=e:null),class:"demo-text",placeholder:"请输入Cookie"},null,8,["modelValue"]),f("div",tt,[b(i,{onClick:T,type:"primary",style:{width:"100%","margin-top":"20px"},round:""},{default:M((()=>[P(" 确定")])),_:1})])])])),_:1})])),_:1},8,["modelValue"])])],512),[[k,y(m)]])]))])}}},[["__scopeId","data-v-86d679f6"]]),nt=""+new URL("../png/logo2-7a418e02.png",import.meta.url).href,ot={class:"side-wrapper"},ct=f("div",{class:"side-title flex",style:{"justify-content":"center"}},[f("img",{src:nt,alt:"",style:{width:"150px"}})],-1),dt={class:"side-menu"},mt=f("svg",{viewBox:"0 0 512 512"},[f("g",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[f("path",{d:"M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0","data-original":"#bfc9d1"})]),f("path",{xmlns:"http://www.w3.org/2000/svg",d:"M192 192h128v128H192zm0 0",fill:"currentColor","data-original":"#82b1ff"}),f("path",{xmlns:"http://www.w3.org/2000/svg",d:"M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0",fill:"currentColor","data-original":"#bfc9d1"})],-1),pt={class:"side-wrapper"},ut=f("div",{class:"side-title"},"发现",-1),ht={class:"side-menu"},vt=f("svg",{t:"1648737091540",class:"icon",viewBox:"0 0 1048 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8016",width:"16",height:"16"},[f("path",{d:"M897.382953 128.420008h151.612645v40.976391h-151.612645zM0 128.420008h495.814326v40.976391H0zM770.356142 390.668908h278.639456v40.97639h-278.639456zM0 390.668908h495.814326v40.97639H0zM733.477391 636.527251h315.518207v40.97639h-315.518207zM0 636.527251h131.12445v40.97639H0z",fill:"#525B72","p-id":"8017"}),f("path",{d:"M440.598639 786.234494m-192.691476 0a192.691477 192.691477 0 1 0 385.382953 0 192.691477 192.691477 0 1 0-385.382953 0Z",fill:"#525B72","p-id":"8018"}),f("path",{d:"M440.598639 999.414166c-117.548972 0-213.179672-95.634798-213.179671-213.179672s95.6307-213.175574 213.179671-213.175574c117.548972 0 213.179672 95.6307 213.179672 213.175574S558.147611 999.414166 440.598639 999.414166z m0-385.382954c-94.95459 0-172.203281 77.252789-172.203281 172.199184 0 94.95459 77.248691 172.203281 172.203281 172.203281 94.950492 0 172.203281-77.252789 172.203282-172.203281 0-94.946395-77.252789-172.199184-172.203282-172.199184z",fill:"#525B72","p-id":"8019"}),f("path",{d:"M633.290116 786.234494V196.481793L792.893157 36.878752v217.994397l-159.603041 159.603041",fill:"#525B72","p-id":"8020"}),f("path",{d:"M653.778311 786.234494h-40.97639V196.481793c0-5.433469 2.155358-10.645666 6.003041-14.489252l159.603041-159.603041A20.488195 20.488195 0 0 1 813.381353 36.878752v217.994397a20.475902 20.475902 0 0 1-6.003042 14.489252l-153.6 153.604098v363.267995z m0-581.266491v160.045586l118.626651-118.62665V86.341353l-118.626651 118.62665z",fill:"#525B72","p-id":"8021"}),f("path",{d:"M431.866571 661.154062c75.929252 0 137.705258 54.265034 137.705258 120.974597S507.795822 903.119648 431.866571 903.119648s-137.705258-54.273229-137.705258-120.982793 61.776006-120.982793 137.705258-120.982793z m-199.169844 120.982793c0 100.605234 89.34902 182.447379 199.169844 182.447379S631.036415 882.742089 631.036415 782.136855c0-100.601136-89.34902-182.439184-199.169844-182.439184s-199.169844 81.838047-199.169844 182.439184z",fill:"#525B72",opacity:".1","p-id":"8022"}),f("path",{d:"M618.804962 349.995742L779.534854 189.269948l28.970308 28.970308-160.725794 160.729892z",fill:"#525B72",opacity:".15","p-id":"8023"}),f("path",{d:"M397.77559 758.955416a32.777015 42.0008 76.768 1 0-15.004963-63.81365 32.777015 42.0008 76.768 1 0 15.004963 63.81365Z",fill:"#525B72",opacity:".53","p-id":"8024"})],-1),gt=f("svg",{viewBox:"0 0 58 58",fill:"currentColor"},[f("path",{d:"M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z"})],-1),ft=f("svg",{t:"1648736357046",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2542",width:"16",height:"16"},[f("path",{d:"M836.778667 273.749333H271.530667l96.085333-96.085333c13.312-13.312 13.312-34.986667 0-48.298667s-34.986667-13.312-48.298667 0l-166.229333 166.058667c-0.512 0.512-0.853333 1.194667-1.365333 1.706667a102.570667 102.570667 0 0 0-37.376 79.018666v419.84c0 56.490667 45.909333 102.4 102.4 102.4h619.690666c56.490667 0 102.4-45.909333 102.4-102.4v-419.84c0.341333-56.490667-45.568-102.4-102.058666-102.4z m34.133333 522.24c0 18.773333-15.36 34.133333-34.133333 34.133334H217.088c-18.773333 0-34.133333-15.36-34.133333-34.133334v-419.84c0-18.773333 15.36-34.133333 34.133333-34.133333h619.690667c18.773333 0 34.133333 15.36 34.133333 34.133333v419.84z","p-id":"2543",fill:"#525B72"}),f("path",{d:"M383.317333 438.954667c-76.458667 0-138.581333 62.122667-138.581333 138.581333 0 76.458667 62.122667 138.581333 138.581333 138.581333 76.288 0 138.581333-62.122667 138.581334-138.581333-0.170667-76.458667-62.293333-138.581333-138.581334-138.581333z m0 208.725333c-38.741333 0-70.314667-31.573333-70.314666-70.314667s31.573333-70.314667 70.314666-70.314666 70.314667 31.573333 70.314667 70.314666-31.573333 70.314667-70.314667 70.314667zM757.930667 477.866667h-136.533334c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133333h136.533334a34.133333 34.133333 0 1 0 0-68.266666zM757.930667 619.52h-136.533334c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h136.533334a34.133333 34.133333 0 1 0 0-68.266667z","p-id":"2544",fill:"#525B72"})],-1),yt=f("span",{class:"notification-number updates"},"3",-1),_t=f("svg",{t:"1648736548811",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4365",width:"20",height:"20"},[f("path",{d:"M964.608 234.496c-46.08-52.565333-104.789333-93.696-169.642667-118.784a34.030933 34.030933 0 0 0-46.421333 31.744v420.352a178.005333 178.005333 0 0 0-110.933333-38.741333c-98.816 0-179.2 80.384-179.2 179.2S538.794667 887.466667 637.610667 887.466667s179.2-80.384 179.2-179.2c0-1.877333-0.170667-3.754667-0.341334-5.632 0-1.024 0.341333-1.877333 0.341334-2.901334V201.216c36.181333 20.309333 69.12 46.933333 96.597333 78.165333 12.458667 14.165333 34.133333 15.530667 48.128 3.072 14.165333-12.288 15.530667-33.792 3.072-47.957333zM637.610667 819.2c-61.098667 0-110.933333-49.834667-110.933334-110.933333s49.834667-110.933333 110.933334-110.933334 110.933333 49.834667 110.933333 110.933334-49.834667 110.933333-110.933333 110.933333zM185.344 307.2h392.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133334h-392.533333a34.133333 34.133333 0 1 0 0 68.266667zM424.277333 460.8h-238.933333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h238.933333c18.773333 0 34.133333-15.36 34.133334-34.133334s-15.36-34.133333-34.133334-34.133333zM321.877333 682.666667h-136.533333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133333h136.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133333z","p-id":"4366",fill:"#525B72"})],-1),wt=f("svg",{t:"1686815711340",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3536",width:"28",height:"28"},[f("path",{d:"M844.832 885.344c-30.485333-20.714667-77.781333-18.965333-144.053333 9.386667A425.024 425.024 0 0 1 512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667a425.013333 425.013333 0 0 1-44.405334 189.717333 32 32 0 0 1-57.301333-28.490666A361.013333 361.013333 0 0 0 874.666667 512c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667c56.704 0 111.488-13.013333 161.12-37.653334l1.6-0.746666c84.746667-36.437333 154.176-39.125333 206.08-3.861334a32 32 0 1 1-35.968 52.938667zM512 416a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m160 160a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM512 736a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM352 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128z",fill:"#000000","p-id":"3537"})],-1),xt=f("svg",{t:"1686815748873",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4565",width:"28",height:"28"},[f("path",{d:"M704 128a32 32 0 0 1 0 64h-21.333333v160.789333a10.666667 10.666667 0 0 0 1.088 4.693334l180.874666 369.6c28.48 58.218667 4.384 128.490667-53.813333 156.970666A117.333333 117.333333 0 0 1 759.242667 896H264.746667c-64.8 0-117.333333-52.533333-117.333334-117.333333a117.333333 117.333333 0 0 1 11.946667-51.573334l180.874667-369.621333a10.666667 10.666667 0 0 0 1.088-4.693333V192h-21.333334a32 32 0 0 1-31.946666-30.122667L288 160a32 32 0 0 1 32-32z m51.968 522.666667H268.010667l-51.157334 104.554666A53.333333 53.333333 0 0 0 264.757333 832H759.253333a53.333333 53.333333 0 0 0 47.893334-76.778667L755.978667 650.666667zM618.666667 192H405.333333v160.789333a74.666667 74.666667 0 0 1-7.594666 32.821334L299.328 586.666667h425.322667l-98.389334-201.066667A74.666667 74.666667 0 0 1 618.666667 352.8V192z",fill:"#000000","p-id":"4566"})],-1),Lt={class:"side-wrapper"},kt=f("div",{class:"side-title"},"美化",-1),bt={class:"side-menu"},Mt=f("svg",{viewBox:"0 0 512 512",fill:"currentColor"},[f("path",{d:"M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z"})],-1),Pt={key:0,class:"side-wrapper"},zt=f("div",{class:"side-title"},"收藏",-1),jt={class:"side-menu"},Ct=["onClick"],It=["src"],Et={class:"side-menu-title"},Vt={style:{"font-size":"8px"}},At={__name:"MenuBar",setup(e){const t=pe(),a=oe(),s=p({list:[]}),{list:i}=u(s);I((()=>t.userInfo.userId),(()=>c(this,null,(function*(){var e;t.userInfo.userId&&(e=t.userInfo.userId,ye.post(`/user/playlist?uid=${e}`)).then((({data:e})=>{s.list=e.playlist}))}))),{immediate:!0});return(e,t)=>{const s=E("router-link"),r=Y;return v(),V(r,{class:"left-side"},{default:M((()=>[f("div",ot,[ct,f("div",dt,[b(s,{to:"/"},{default:M((()=>[mt,P(" 首页 ")])),_:1})])]),f("div",pt,[ut,f("div",ht,[b(s,{to:"/musiclibrary"},{default:M((()=>[vt,P(" 乐库 ")])),_:1}),b(s,{to:"/mv"},{default:M((()=>[gt,P(" 视频 ")])),_:1}),b(s,{to:"/radio"},{default:M((()=>[ft,P(" 电台 "),yt])),_:1}),b(s,{to:"/songList"},{default:M((()=>[_t,P(" 歌单 ")])),_:1}),b(s,{to:"/animation"},{default:M((()=>[wt,P(" 动漫 ")])),_:1}),b(s,{to:"/testPlayer"},{default:M((()=>[xt,P(" 测试 ")])),_:1})])]),f("div",Lt,[kt,f("div",bt,[b(s,{to:"/theme"},{default:M((()=>[Mt,P(" 主题 ")])),_:1})])]),y(i).length?(v(),g("div",Pt,[zt,f("div",jt,[(v(!0),g(A,null,S(y(i),((e,t)=>(v(),g("a",{href:"javascript:;",style:{padding:"5px 10px 5px 10px"},onClick:t=>{return s=e.id,void a.push({path:"/playList",query:{id:s}});var s},key:t},[f("img",{src:e.coverImgUrl+"?param=28y28",alt:"",class:"side-menu-cover"},null,8,It),f("div",Et,[f("span",null,z(e.name),1),f("span",Vt,"共"+z(e.trackCount)+"首",1)])],8,Ct)))),128))])])):O("",!0)])),_:1})}}},St=""+new URL("../svg/上一首-9500a10d.svg",import.meta.url).href,Ot=""+new URL("../svg/下一首-4ecd874e.svg",import.meta.url).href,Tt=""+new URL("../svg/声音-04619f19.svg",import.meta.url).href,$t=""+new URL("../svg/列表-8863e00a.svg",import.meta.url).href,qt=""+new URL("../png/vinyl-61de2589.png",import.meta.url).href,Rt=""+new URL("../svg/播放-8ef958fe.svg",import.meta.url).href,Ht=""+new URL("../svg/暂停-82df03f8.svg",import.meta.url).href,Ut=""+new URL("../svg/sequence-33ffbeed.svg",import.meta.url).href,Bt=""+new URL("../svg/cycle-2d287b66.svg",import.meta.url).href,Dt=""+new URL("../svg/random-bdd1c63a.svg",import.meta.url).href,Kt=ie({id:"musicStore",state:()=>({count:0,songs:[{id:"27591651",title:"Intro AE 86",singer:"陈光荣",album:"頭文字[イニシャル]D THE MOVIE SOUND TUNE",cover:"http://p4.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg",src:"http://music.163.com/song/media/outer/url?id=27591651.mp3",time:149e3,mv:"",Lyric:""},{id:"409872504",title:"Ninelie",singer:"Aimer",album:"ninelie EP",cover:"http://p3.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg",src:"http://music.163.com/song/media/outer/url?id=409872504.mp3",time:260675,mv:"",Lyric:""}],currentIndex:0}),actions:{inc(){this.count++},updateSongs(e){this.songs[this.currentIndex]=Object.assign(this.songs[this.currentIndex],n({},e))}},persist:{enabled:!0,strategies:[{paths:["songs"],storage:localStorage}]}}),Nt=e=>(j("data-v-ce3d25f7"),e=e(),C(),e),Ft=["src"],Zt={class:"playerbox"},Gt={class:"m-tandc"},Wt=["src"],Xt={class:"titleandsinger"},Qt={href:"javascript:;"},Yt={href:"javascript:;",style:{"font-size":"13px"}},Jt={class:"btns"},ea={class:"aplayer"},ta={class:"m-btns"},aa=["src"],sa=[Nt((()=>f("img",{src:St,alt:"",class:"Musicice"},null,-1)))],ia=["src"],ra=[Nt((()=>f("img",{src:Ot,alt:"",class:"Musicice"},null,-1)))],la={class:"slider-demo-block rightvoice"},na=Nt((()=>f("a",{href:"javascript:;"},[f("img",{src:Tt,alt:"",width:"20"})],-1))),oa={class:"notification-number"},ca=Nt((()=>f("img",{src:$t,alt:"",class:"Musicice"},null,-1))),da={class:"m-slider"},ma={class:"prismColor"},pa={class:"slider-demo-block"},ua={class:"prismColor",style:{"margin-left":"18px"}},ha={class:"showMusicBox"},va={style:{"margin-right":"150px"}},ga={style:{position:"relative"}},fa={class:"lyrics-container"},ya={class:"comments"},_a={class:"content-section",style:{"margin-top":"0"}},wa={class:"apps-card"},xa={class:"app-card__subtext"},La={key:0,class:"app-card__footer"},ka={class:"pagination"},ba=Te({__name:"Player",setup(e){const t=oe(),a=Kt(),s=T(),i=p({list:[],volumes:70,playing:!1,currentIndex:0,mode:0,progress:0,duration:0,currentTime:0,playerMode:[{model:"顺序播放",icon:Ut},{model:"单曲循环",icon:Bt},{model:"随机播放",icon:Dt}],isPlayerModel:[{model:"播放",icon:Rt},{model:"暂停",icon:Ht}],currenPlayerState:"",drawer:!1,animationPlayState:"paused",parsedLyrics:[],currentLine:-1,commentsList:[],currentCommentsPage:1,CommentsTotal:0,loading:!0}),{list:r,volumes:l,currentTime:n,duration:o,progress:m,currenPlayerState:_,drawer:w,animationPlayState:x,parsedLyrics:k,currentLine:j,commentsList:C,currentCommentsPage:E,CommentsTotal:V,loading:H}=u(i),U=d((()=>a.songs[a.currentIndex])),B=d((()=>i.playerMode[i.mode]));h((()=>{N(),s.value.src=U.value.src,i.currenPlayerState=i.isPlayerModel[0].icon,me(),i.parsedLyrics=ce(U.value.Lyric)})),I((()=>a.currentIndex),(()=>{D(),me()}));const D=()=>c(this,null,(function*(){i.animationPlayState="running",i.playing=!0,i.currenPlayerState=i.isPlayerModel[1].icon,$((()=>{s.value.play()}))})),N=()=>{i.animationPlayState="paused",i.playing=!1,i.currenPlayerState=i.isPlayerModel[0].icon,$((()=>{s.value.pause()}))},F=()=>{i.playing?N():D()},Z=()=>{0===a.currentIndex?a.currentIndex=a.songs.length-1:a.currentIndex--,W()},G=()=>{a.currentIndex===a.songs.length-1?a.currentIndex=0:a.currentIndex++,W()},W=()=>{$((()=>{s.value.src=U.value.src,s.value.play(),i.playing=!0,i.currenPlayerState=i.isPlayerModel[1].icon}))},X=()=>{switch(i.mode){case 0:G();break;case 1:W();break;case 2:const e=Math.floor(Math.random()*a.songs.length);a.currentIndex=e,W()}},Q=()=>c(this,null,(function*(){var e;if(i.currentTime=Math.floor(s.value.currentTime),i.progress=i.currentTime/i.duration*100,U.value.Lyric||(e=U.value.id,ye.get(`/lyric?id=${e}`)).then((({data:e})=>{let t="";try{t=e.lrc.lyric}catch(s){t=""}a.updateSongs({Lyric:t})})),i.parsedLyrics=ce(U.value.Lyric),!i.parsedLyrics)return;for(let a=0;a<i.parsedLyrics.length;a++)if(a===i.parsedLyrics.length-1||i.currentTime<i.parsedLyrics[a+1].time){i.currentLine=a;break}const t=document.querySelector(".lyrics-container li.active");if(t){const e=document.querySelector(".lyrics-container ul");e.scrollTop=t.offsetTop-e.clientHeight/2+t.clientHeight}})),Y=()=>{i.duration=Math.floor(s.value.duration)},ie=()=>{2===i.mode?i.mode=0:i.mode++,K.success({message:i.playerMode[i.mode].model,type:"success"})},re=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`,le=e=>{let t=i.progress*i.duration/100;isNaN(t)||(s.value.currentTime=t)},ne=e=>{s.value.volume=e/100},ce=e=>{if(!e)return;return e.split("\n").map((e=>{const t=e.match(/^\[(\d{2}):(\d{2}\.\d{2,3})\](.*)/);if(t){return{time:60*parseInt(t[1])+parseFloat(t[2]),text:t[3].trim()}}return null})).filter((e=>null!==e))},de=()=>{me()},me=()=>{var e;i.loading=!0,i.commentsList=[],(e={id:U.value.id,offset:20*(i.currentCommentsPage-1),limit:20},ye.get("/comment/music",{params:e})).then((e=>{i.commentsList=e.data,i.CommentsTotal=e.data.total,i.loading=!1}))};return(e,i)=>{const r=J,c=ee,d=te,p=ae,u=se;return v(),g(A,null,[f("audio",{ref_key:"audio",ref:s,src:y(U).src,onTimeupdate:Q,onDurationchange:Y,onEnded:X},null,40,Ft),f("div",Zt,[f("div",Gt,[f("img",{src:y(U).cover+"?param=91y90",alt:"",onClick:i[0]||(i[0]=e=>w.value=!y(w))},null,8,Wt),f("div",Xt,[f("a",Qt,z(y(U).title),1),f("a",Yt,z(y(U).singer),1)])]),f("div",Jt,[f("div",ea,[f("div",ta,[f("a",{href:"javascript:;",onClick:ie},[f("img",{src:y(B).icon,alt:"",class:"Musicice"},null,8,aa)]),f("a",{href:"javascript:;",onClick:Z},sa),f("a",{href:"javascript:;",onClick:F},[f("img",{src:y(_),alt:""},null,8,ia)]),f("a",{href:"javascript:;",onClick:G},ra)]),f("div",la,[na,b(r,{modelValue:y(l),"onUpdate:modelValue":i[1]||(i[1]=e=>L(l)?l.value=e:null),onChange:ne,style:{width:"70px"},"show-tooltip":!0},null,8,["modelValue"]),f("a",{href:"javascript:;",onClick:i[2]||(i[2]=e=>y(t).push({path:"/currentPlaylist"}))},[f("span",oa,z(y(a).songs.length),1),ca])])]),f("div",da,[f("span",ma,z(re(y(n))),1),f("div",pa,[b(r,{modelValue:y(m),"onUpdate:modelValue":i[3]||(i[3]=e=>L(m)?m.value=e:null),"show-tooltip":!1,onChange:le,style:{width:"400px"}},null,8,["modelValue"])]),f("span",ua,z(re(y(o))),1)])]),b(u,{title:"",modal:!1,modelValue:y(w),"onUpdate:modelValue":i[5]||(i[5]=e=>L(w)?w.value=e:null),direction:"ttb","destroy-on-close":"",size:"89.5%"},{default:M((()=>[f("div",null,[f("div",ha,[f("div",va,[f("div",ga,[f("img",{class:"vinyl rotate",style:q({animationPlayState:y(x)}),src:qt,alt:""},null,4),b(c,{class:"elImg",src:y(U).cover+"?param=350y350"},null,8,["src"])])]),f("div",fa,[f("ul",null,[(v(!0),g(A,null,S(y(k),((e,t)=>(v(),g("li",{key:t,class:R({active:y(j)===t})},z(e.text),3)))),128))])])]),f("div",ya,[f("div",_a,[f("div",wa,[b(d,{rows:5,animated:"",loading:y(H)},{default:M((()=>[(v(!0),g(A,null,S(y(C).comments,((e,t)=>(v(),g("div",{class:"app-card usercom",key:t},[f("span",null,[b(c,{class:"useravatar",src:e.user.avatarUrl+"?param=32y32",alt:""},null,8,["src"]),P(" "+z(e.user.nickname),1)]),f("div",xa,z(e.content),1),e.ipLocation.location?(v(),g("div",La,[f("span",null,"IP:"+z(e.ipLocation.location),1),f("span",null,z(e.timeStr),1)])):O("",!0)])))),128))])),_:1},8,["loading"])])])])]),f("div",ka,[b(p,{onCurrentChange:de,currentPage:y(E),"onUpdate:currentPage":i[4]||(i[4]=e=>L(E)?E.value=e:null),"page-size":30,layout:"prev, pager, next, jumper",total:y(V)},null,8,["currentPage","total"])])])),_:1},8,["modelValue"])])],64)}}},[["__scopeId","data-v-ce3d25f7"]]),Ma={class:"app"},Pa={class:"wrapper"},za={class:"main-container"},ja={class:"content-wrapper"},Ca=f("div",{class:"overlay-app"},null,-1),Ia={__name:"default",setup:e=>(e,t)=>{const a=E("router-view");return v(),g("div",Ma,[b(lt),f("div",Pa,[b(At),f("div",za,[f("div",ja,[b(a,null,{default:M((({Component:e})=>[b(H,{name:"el-fade-in-linear"},{default:M((()=>[(v(),V(U,null,[(v(),V(B(e)))],1024))])),_:2},1024)])),_:1})]),b(ba)])]),Ca])}},Ea={__name:"App",setup:e=>(fe(),(e,t)=>(v(),V(Ia)))},Va={},Aa=function(e,t,a){if(!t||0===t.length)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,a),e in Va)return;Va[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!a)for(let a=s.length-1;a>=0;a--){const i=s[a];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,a)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},Sa=[{path:"/",component:()=>Aa((()=>import("./index-a3303fdb.js")),["./index-a3303fdb.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./musicTable-dff33bd3.js","./formatTime-d6dfa579.js","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/musiclibrary",component:()=>Aa((()=>import("./index-3382d5cc.js")),["./index-3382d5cc.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./musicTable-dff33bd3.js","./formatTime-d6dfa579.js","./vue-router-f9877ca9.js","./index-cdaecc7d.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js","./index-d04e39b5.js","../css/index-e6ebd8c5.css"],import.meta.url),meta:{keepAlive:!0}},{path:"/mv",component:()=>Aa((()=>import("./index-cdaecc7d.js")),["./index-cdaecc7d.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/mv/:id",name:"mv",component:()=>Aa((()=>import("./_id_-a617ea20.js")),["./_id_-a617ea20.js","./vue-router-f9877ca9.js","./@vue-06d7d904.js","./element-plus-2073bb18.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url)},{path:"/radio",component:()=>Aa((()=>import("./index-4ec64a10.js")),["./index-4ec64a10.js","./vue-router-f9877ca9.js","./@vue-06d7d904.js","./element-plus-2073bb18.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/songList",component:()=>Aa((()=>import("./index-d04e39b5.js")),["./index-d04e39b5.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/testPlayer",component:()=>Aa((()=>import("./index-882989e7.js")),["./index-882989e7.js","./@vue-06d7d904.js","./element-plus-2073bb18.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js","./vue-router-f9877ca9.js","../css/index-707c4271.css"],import.meta.url)},{path:"/theme",component:()=>Aa((()=>import("./index-375b295d.js")),["./index-375b295d.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./axios-a8ee11a1.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./vue-router-f9877ca9.js","../css/index-385640bd.css"],import.meta.url),meta:{keepAlive:!0}},{path:"/search",component:()=>Aa((()=>import("./index-7d7aa71d.js")),["./index-7d7aa71d.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./musicTable-dff33bd3.js","./formatTime-d6dfa579.js","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/playList",component:()=>Aa((()=>import("./index-3663aaf5.js")),["./index-3663aaf5.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./musicTable-dff33bd3.js","./formatTime-d6dfa579.js","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/currentPlaylist",component:()=>Aa((()=>import("./index-9938de83.js")),["./index-9938de83.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./formatTime-d6dfa579.js","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js"],import.meta.url),meta:{keepAlive:!0}},{path:"/animation",component:()=>Aa((()=>import("./index-c49c7b85.js")),["./index-c49c7b85.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js","../css/index-cf90d289.css"],import.meta.url),meta:{keepAlive:!0}},{path:"/animation/:id",name:"animation",component:()=>Aa((()=>import("./_id_-4db45f6f.js")),["./_id_-4db45f6f.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js","../css/_id_-320944e0.css"],import.meta.url)},{path:"/animation/player/:id",name:"playerAnimation",component:()=>Aa((()=>import("./player-c8cf118a.js")),["./player-c8cf118a.js","./element-plus-2073bb18.js","./@vue-06d7d904.js","./@element-plus-788c49e3.js","./@vueuse-45103712.js","./lodash-es-57caac06.js","./@ctrl-91de2ec7.js","./@popperjs-b78c3215.js","./escape-html-2f7c2e90.js","./dayjs-4d0ffb58.js","./normalize-wheel-es-3222b0a2.js","../css/element-plus-c3c43290.css","./vue3-video-play-3193fd51.js","../css/vue3-video-play-038d1592.css","./vue-router-f9877ca9.js","./pinia-da509d88.js","./pinia-plugin-persist-70d140bd.js","./axios-a8ee11a1.js","../css/player-99b026fd.css"],import.meta.url)}],Oa=ce({history:de(),routes:Sa});D(Ea).use(ue).use(Oa).mount("#app");export{me as D,pe as G,Te as _,Me as a,Pe as b,ke as c,_e as d,Kt as e,Ce as f,ze as g,we as h,Oe as i,xe as m,be as n,je as p,Ee as r,Le as s,fe as u,Se as v};
