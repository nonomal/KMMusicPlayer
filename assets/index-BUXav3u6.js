import{e as r,f as c,g as e,d as k,z as C,W as T,a as M,t as L,o as S,X as V,Y as w,_ as P,b as N,h as i,v as j,m as l,F as q,k as B,w as h,Z as U,$ as F}from"./index-Ccz55_AV.js";import{_ as z}from"./index-j3qt8boy.js";const A={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},I=e("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"},null,-1),K=[I];function R(p,o){return r(),c("svg",A,[...K])}const W={name:"mdi-cards-heart-outline",render:R},E={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},J=e("path",{fill:"currentColor",d:"m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"},null,-1),O=[J];function X(p,o){return r(),c("svg",E,[...O])}const Y={name:"material-symbols-play-circle-outline",render:X},Z={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=e("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-2.5-3.5l7-4.5l-7-4.5z"},null,-1),H=[G];function Q(p,o){return r(),c("svg",Z,[...H])}const $={name:"ic-outline-play-circle",render:Q},tt=k({__name:"index",setup(p,{expose:o}){o();const d=C(),t=T(),n=M({playlistData:{playlist:{tracks:[]}},commentListData:[],drawer:!1}),{playlistData:u,commentListData:x,drawer:y}=L(n);S(()=>{V(d.query.id).then(s=>{n.playlistData=s})});function m(s){if(s<1e4)return s.toString();if(s<1e5){const a=(s/1e4).toFixed(1);return a.endsWith(".0")?a.slice(0,-2)+"万":a+"万"}else return(s/1e4).toFixed(0)+"万"}function f(s){return new Date(s).toLocaleString()}const _={route:d,audioStore:t,state:n,playlistData:u,commentListData:x,drawer:y,formatNumber:m,formattedDate:f,getCommentPlaylist:(s=1)=>{w({offset:s,id:d.query.id}).then(a=>{n.commentListData=n.commentListData.concat(a.comments)})},showDrawer:()=>{n.drawer=!0,!(n.commentListData.length>0)&&w({offset:1,id:d.query.id}).then(s=>{n.commentListData=s.comments})},playMusic:()=>{let s=u.value.playlist.tracks.map(a=>({id:a.id,title:a.name,singer:a.ar.map(b=>b.name).join(" / "),album:a.al.name,cover:a.al.picUrl,time:a.dt,source:"",mv:a.mv}));t.addTrack(s)}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),et={class:"container h-full px-4 md:px-6 py-12 w-full box-border flex flex-1 flex-col overflow-x-hidden"},at={class:"flex flex-col md:flex-row h-full gap-8 md:gap-12 lg:gap-16"},st={class:"lg:flex flex-col items-center gap-4 relative hidden w-[320px]"},lt=["src"],ot={class:"absolute top-2 right-2 bg-gray-400/50 dark:bg-gray-600/50 px-2 py-1 rounded-md text-white text-sm flex items-center gap-1"},nt={class:"text-center flex flex-col gap-3"},it={class:"text-2xl font-bold tracking-tight dark:text-white"},rt={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},ct=["src"],dt={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},mt={class:"bg-muted dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},_t=["title"],pt={class:"flex items-center justify-center gap-1 w-full"},ut={class:"flex items-center"},xt={class:"text-sm dark:text-gray-300"},yt={class:"flex items-center"},ft={class:"text-sm dark:text-gray-300"},ht={class:"flex items-center"},gt={class:"text-sm dark:text-gray-300"},vt={class:"text-muted-foreground dark:text-gray-300 text-sm"},Dt={class:"text-muted-foreground dark:text-gray-300 text-sm"},wt={class:"gap-6 flex flex-1"},bt={class:"relative w-full h-full overflow-hidden"};function kt(p,o,d,t,n,u){var _,s;const x=$,y=Y,m=N("el-button"),f=W,g=F,v=z,D=U;return r(),c("div",et,[e("div",at,[e("div",st,[e("img",{src:t.playlistData.playlist.coverImgUrl+"?param=560y560",alt:"Summer Vibes Playlist",width:"300",height:"300",class:"rounded-lg object-cover aspect-square"},null,8,lt),e("div",ot,[i(x),j(" "+l(t.formatNumber(t.playlistData.playlist.playCount)),1)]),e("div",nt,[e("h1",it,l(t.playlistData.playlist.name),1),e("div",rt,[e("img",{src:(_=t.playlistData.playlist.creator)==null?void 0:_.avatarUrl,alt:"DJ Sunny",width:"24",height:"24",class:"rounded-full",style:{"aspect-ratio":"24 / 24","object-fit":"cover"}},null,8,ct),e("span",null,l((s=t.playlistData.playlist.creator)==null?void 0:s.nickname),1)]),e("div",dt,[(r(!0),c(q,null,B(t.playlistData.playlist.tags,a=>(r(),c("span",mt,l(a),1))),256))]),e("p",{class:"text-muted-foreground dark:text-gray-300 text-sm md:line-clamp-5",title:t.playlistData.playlist.description},l(t.playlistData.playlist.description),9,_t),e("div",pt,[e("div",ut,[i(m,{text:"",circle:"",class:"!p-3",onClick:t.playMusic},{default:h(()=>[i(y,{class:"text-xl dark:text-white"})]),_:1}),e("span",xt,l(t.formatNumber(t.playlistData.playlist.playCount)),1)]),e("div",yt,[i(m,{text:"",circle:"",class:"!p-3"},{default:h(()=>[i(f,{class:"text-xl dark:text-white"})]),_:1}),e("span",ft,l(t.formatNumber(t.playlistData.playlist.subscribedCount)),1)]),e("div",ht,[i(m,{text:"",circle:"",class:"!p-3",onClick:t.showDrawer},{default:h(()=>[i(g,{class:"text-xl dark:text-white"})]),_:1}),e("span",gt,l(t.formatNumber(t.playlistData.playlist.commentCount)),1)])]),e("p",vt,l(t.formattedDate(t.playlistData.playlist.createTime)),1),e("span",Dt,l(t.playlistData.playlist.trackCount)+" songs ",1)])]),e("div",wt,[e("div",bt,[i(v,{modelValue:t.playlistData.playlist.tracks,"onUpdate:modelValue":o[0]||(o[0]=a=>t.playlistData.playlist.tracks=a)},null,8,["modelValue"])])])]),i(D,{modelValue:t.drawer,"onUpdate:modelValue":o[1]||(o[1]=a=>t.drawer=a),data:t.commentListData,onDIntersect:t.getCommentPlaylist},null,8,["modelValue","data"])])}const Mt=P(tt,[["render",kt],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/songlist/index.vue"]]);export{Mt as default};
