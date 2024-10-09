import{e as t,f as e,h as a,d as l,x as s,a3 as r,a as i,t as n,o as c,a4 as o,a5 as d,_ as m,b as u,i as p,q as x,m as y,F as f,k as g,w as h,j as v,a6 as D,a7 as w}from"./index-BVOiELn9.js";import{_ as k}from"./index-BRXjSs0B.js";const b={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};const C={name:"mdi-cards-heart-outline",render:function(l,s){return t(),e("svg",b,s[0]||(s[0]=[a("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"},null,-1)]))}},T={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};const _={name:"material-symbols-play-circle-outline",render:function(l,s){return t(),e("svg",T,s[0]||(s[0]=[a("path",{fill:"currentColor",d:"m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"},null,-1)]))}},j={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};const L={name:"ic-outline-play-circle",render:function(l,s){return t(),e("svg",j,s[0]||(s[0]=[a("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-2.5-3.5l7-4.5l-7-4.5z"},null,-1)]))}},M={class:"container h-full px-4 md:px-6 py-12 w-full box-border flex flex-1 flex-col overflow-x-hidden"},S={class:"flex flex-col md:flex-row h-full gap-8 md:gap-12 lg:gap-16"},q={key:0,class:"lg:flex flex-col items-center gap-4 relative hidden w-[320px]"},V=["src"],P={class:"absolute top-2 right-2 bg-gray-400/50 dark:bg-gray-600/50 px-2 py-1 rounded-md text-white text-sm flex items-center gap-1"},N={class:"text-center flex flex-col gap-3"},U={class:"text-2xl font-bold tracking-tight dark:text-white"},B={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},F=["src"],z={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},I={class:"bg-muted dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},K=["title"],J={class:"flex items-center justify-center gap-1 w-full"},O={class:"flex items-center"},W={class:"text-sm dark:text-gray-300"},A={class:"flex items-center"},E={class:"text-sm dark:text-gray-300"},G={class:"flex items-center"},H={class:"text-sm dark:text-gray-300"},Q={class:"text-muted-foreground dark:text-gray-300 text-sm"},R={class:"text-muted-foreground dark:text-gray-300 text-sm"},X={class:"gap-6 flex flex-1"},Y={class:"relative w-full h-full overflow-hidden"};const Z=m(l({__name:"index",setup(t,{expose:e}){e();const a=s(),l=r(),m=i({playlistData:{playlist:{tracks:[]}},commentListData:[],drawer:!1}),{playlistData:u,commentListData:p,drawer:x}=n(m);c((()=>{o(a.query.id).then((t=>{m.playlistData=t}))}));const y={route:a,audioStore:l,state:m,playlistData:u,commentListData:p,drawer:x,formatNumber:function(t){if(t<1e4)return t.toString();if(t<1e5){const e=(t/1e4).toFixed(1);return e.endsWith(".0")?e.slice(0,-2)+"万":e+"万"}return(t/1e4).toFixed(0)+"万"},formattedDate:function(t){return new Date(t).toLocaleString()},getCommentPlaylist:(t=1)=>{d({offset:t,id:a.query.id}).then((t=>{m.commentListData=m.commentListData.concat(t.comments)}))},showDrawer:()=>{m.drawer=!0,m.commentListData.length>0||d({offset:1,id:a.query.id}).then((t=>{m.commentListData=t.comments}))},playMusic:()=>{let t=u.value.playlist.tracks.map((t=>({id:t.id,title:t.name,singer:t.ar.map((t=>t.name)).join(" / "),album:t.al.name,cover:t.al.picUrl,time:t.dt,source:"",mv:t.mv})));l.addTrack(t)}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),[["render",function(l,s,r,i,n,c){var o,d;const m=L,b=_,T=u("el-button"),j=C,Z=w,$=k,tt=D;return t(),e("div",M,[a("div",S,[i.playlistData.playlist.id?(t(),e("div",q,[a("img",{src:i.playlistData.playlist.coverImgUrl+"?param=560y560",alt:"Summer Vibes Playlist",width:"300",height:"300",class:"rounded-lg object-cover aspect-square"},null,8,V),a("div",P,[p(m),x(" "+y(i.formatNumber(i.playlistData.playlist.playCount)),1)]),a("div",N,[a("h1",U,y(i.playlistData.playlist.name),1),a("div",B,[a("img",{src:null==(o=i.playlistData.playlist.creator)?void 0:o.avatarUrl,alt:"DJ Sunny",width:"24",height:"24",class:"rounded-full",style:{"aspect-ratio":"24 / 24","object-fit":"cover"}},null,8,F),a("span",null,y(null==(d=i.playlistData.playlist.creator)?void 0:d.nickname),1)]),a("div",z,[(t(!0),e(f,null,g(i.playlistData.playlist.tags,(a=>(t(),e("span",I,y(a),1)))),256))]),a("p",{class:"text-muted-foreground dark:text-gray-300 text-sm md:line-clamp-5",title:i.playlistData.playlist.description},y(i.playlistData.playlist.description),9,K),a("div",J,[a("div",O,[p(T,{text:"",circle:"",class:"!p-3",onClick:i.playMusic},{default:h((()=>[p(b,{class:"text-xl dark:text-white"})])),_:1}),a("span",W,y(i.formatNumber(i.playlistData.playlist.playCount)),1)]),a("div",A,[p(T,{text:"",circle:"",class:"!p-3"},{default:h((()=>[p(j,{class:"text-xl dark:text-white"})])),_:1}),a("span",E,y(i.formatNumber(i.playlistData.playlist.subscribedCount)),1)]),a("div",G,[p(T,{text:"",circle:"",class:"!p-3",onClick:i.showDrawer},{default:h((()=>[p(Z,{class:"text-xl dark:text-white"})])),_:1}),a("span",H,y(i.formatNumber(i.playlistData.playlist.commentCount)),1)])]),a("p",Q,y(i.formattedDate(i.playlistData.playlist.createTime)),1),a("span",R,y(i.playlistData.playlist.trackCount)+" songs ",1)])])):v("",!0),a("div",X,[a("div",Y,[p($,{modelValue:i.playlistData.playlist.tracks,"onUpdate:modelValue":s[0]||(s[0]=t=>i.playlistData.playlist.tracks=t)},null,8,["modelValue"])])])]),p(tt,{modelValue:i.drawer,"onUpdate:modelValue":s[1]||(s[1]=t=>i.drawer=t),data:i.commentListData,onDIntersect:i.getCommentPlaylist},null,8,["modelValue","data"])])}],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/songlist/index.vue"]]);export{Z as default};
