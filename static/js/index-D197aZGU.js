import{e,f as s,h as t,d as a,D as i,a as l,t as r,r as m,H as n,Q as d,o,W as c,X as v,Y as g,Z as p,_ as u,b as x,i as y,m as f,j as h,F as b,k as q,y as D}from"./index-D5TMCQ31.js";import{g as k}from"./index.es-CIxgSy4G.js";const w={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};const C={name:"material-symbols-android-now-playing-outline",render:function(a,i){return e(),s("svg",w,i[0]||(i[0]=[t("path",{fill:"currentColor",d:"M10.5 17q1.05 0 1.775-.725Q13 15.55 13 14.5V9h3V7h-4v5.5q-.325-.225-.7-.363q-.375-.137-.8-.137q-1.05 0-1.775.725Q8 13.45 8 14.5q0 1.05.725 1.775Q9.45 17 10.5 17Zm1.5 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"},null,-1)]))}},Q={class:"w-full grid grid-rows-[auto_1fr_auto] gap-6 pb-10"},_={class:"grid md:grid-cols-6 gap-10 items-start p-4 md:px-6"},L={class:"col-span-4 grid gap-6"},j={class:"grid gap-4"},P={class:"rounded-xl overflow-hidden border aspect-video bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},U={class:"py-2 grid gap-4"},M={class:"text-2xl font-semibold line-clamp-2"},Z={class:"flex items-center justify-between"},S={class:"flex gap-3 items-center"},V=["src"],T={class:"text-base"},z={key:0,class:"font-semibold"},E={class:"text-gray-500 dark:text-gray-400 flex gap-2"},K={class:"bg-[var(--el-color-primary)] text-white dark:bg-gray-700 px-2 py-1 rounded-md text-xs"},N={class:"grid gap-4 text-sm leading-relaxed"},B={class:"text-sm text-gray-500 dark:text-gray-400"},F={class:"grid gap-8"},G={class:"font-semibold text-xl"},H={class:"grid gap-6"},I={class:"relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border"},O={class:"grid gap-2"},W={class:"flex items-center gap-2"},X={class:"font-semibold"},Y={class:"text-gray-500 text-xs dark:text-gray-400"},A={class:"col-span-2 grid gap-6"},J={class:"flex items-start gap-4 relative group"},R=["src"],$={class:"text-sm"},ee={class:"font-medium line-clamp-2"},se={class:"text-xs text-gray-500 line-clamp-1 dark:text-gray-400"},te={class:"text-xs text-gray-500 line-clamp-1 dark:text-gray-400 flex gap-1 items-center"};const ae=u(a({__name:"index",setup(e,{expose:s}){s();const t=i(),a=l({mvUrls:"",mvDetails:{},mvCommentsList:{},mvs:[]}),{mvUrls:u,mvDetails:x,mvCommentsList:y,mvs:f}=r(a),h=m([]);function b(e){v({offset:e,id:t.query.id}).then((({comments:e})=>{a.mvCommentsList.comments=a.mvCommentsList.comments.concat(e)}))}n(h,{initialPageNum:2,pageSize:10,threshold:.1},b),d((()=>t.query.id),(e=>{"string"==typeof e&&Promise.all([g(e),p(e),v({id:e})]).then((([e,s,t])=>{a.mvUrls=e.data.url,a.mvDetails=s.data,a.mvCommentsList=t}))}),{immediate:!0}),o((()=>{c(t.query.id).then((e=>{a.mvs=e.mvs}))}));const q={route:t,state:a,mvUrls:u,mvDetails:x,mvCommentsList:y,mvs:f,observedElement:h,handleIntersect:b,get videoPlay(){return k}};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}),[["render",function(a,i,l,r,m,n){const d=x("el-avatar"),o=C;return e(),s("div",Q,[t("main",_,[t("div",L,[t("div",j,[t("div",P,[y(r.videoPlay,{width:"100%",height:"100%",title:r.mvDetails.name,src:r.mvUrls,poster:r.mvDetails.cover,type:"video/mp4"},null,8,["title","src","poster"])]),t("div",U,[t("h1",M,f(r.mvDetails.name),1),t("div",Z,[t("div",S,[r.mvDetails.artists&&r.mvDetails.artists.length>0?(e(),s("img",{key:0,alt:"Thumbnail",class:"rounded-full object-cover aspect-square border w-10 h-10",src:r.mvDetails.cover+"?param=90y90"},null,8,V)):h("",!0),t("div",T,[r.mvDetails.artists&&r.mvDetails.artists.length>0?(e(),s("div",z,f(r.mvDetails.artists.map((e=>e.name)).join()),1)):h("",!0),t("div",E,[(e(!0),s(b,null,q(r.mvDetails.videoGroup,(t=>(e(),s("span",K,f(t.name),1)))),256))])])])])]),t("div",N,[t("p",null,f(r.mvDetails.desc),1)]),t("div",B," Video created on "+f(r.mvDetails.publishTime)+" • "+f(r.mvDetails.playCount)+" views • "+f(r.mvDetails.subCount)+" likes ",1)]),t("div",F,[t("h2",G,f(r.mvCommentsList.total)+" Comments ",1),t("div",H,[(e(!0),s(b,null,q(r.mvCommentsList.comments,(a=>(e(),s("div",{class:"text-sm flex items-start gap-4",key:a.id,ref_for:!0,ref:"observedElement"},[t("span",I,[y(d,{src:a.user.avatarUrl+"?param=60y60",alt:a.user.nickname},null,8,["src","alt"])]),t("div",O,[t("div",W,[t("div",X,"@"+f(a.user.nickname),1),t("div",Y,f(a.timeStr),1),D(" "+f(a.ipLocation.location),1)]),t("div",null,f(a.content),1)])])))),128))])])]),t("div",A,[(e(!0),s(b,null,q(r.mvs,(a=>(e(),s("div",J,[i[0]||(i[0]=t("a",{class:"absolute inset-0 z-10",href:"#"},[t("span",{class:"sr-only"},"View")],-1)),t("img",{alt:"Thumbnail",class:"aspect-video rounded-lg object-cover w-28 h-16",src:a.cover},null,8,R),t("div",$,[t("div",ee,f(a.name),1),t("div",se,f(a.artistName),1),t("div",te,[y(o),D(" "+f(a.playCount),1)])])])))),256))])])])}],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/video/index.vue"]]);export{ae as default};
