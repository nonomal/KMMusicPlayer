import{d as C,V as b,x as S,r as T,_ as M,b as g,e as i,l as L,w as y,g as e,f as c,F as V,k as P,h as r,m as l,y as B,a as N,t as I,o as j,W as q,X as k,s as U}from"./index-BInQ2O41.js";import{u as $}from"./useIntersectionObserver-Cna5UKx-.js";import{_ as A}from"./index-D4dwJrzZ.js";const E=C({__name:"index",props:b({direction:{type:String,default:"rtl"},data:{type:Array,default:()=>[]}},{modelValue:{},modelModifiers:{}}),emits:b(["DIntersect"],["update:modelValue"]),setup(d,{expose:a,emit:n}){a();const t=S(d,"modelValue"),p=n,h=T([]);$(h,{initialPageNum:2,pageSize:10,threshold:.1},_);function _(s){p("DIntersect",s)}const m={drawer:t,Emit:p,observedElement:h,handleIntersect:_};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),F={class:"space-y-8"},K=e("div",null,[e("h2",{class:"text-3xl font-bold"},"Comments"),e("p",{class:"text-muted-foreground"}," Share your thoughts and feedback on this article. ")],-1),z={class:"space-y-6"},O={class:"relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 border"},R={class:"grid gap-2"},W={class:"flex items-center gap-2"},H={class:"font-medium text-base"},J={class:"text-xs text-muted-foreground"},X={class:"text-xs text-muted-foreground"},G={class:"text-sm"};function Q(d,a,n,t,p,h){const _=g("el-avatar"),m=g("el-drawer");return i(),L(m,{modelValue:t.drawer,"onUpdate:modelValue":a[0]||(a[0]=s=>t.drawer=s),title:"评论",direction:n.direction,class:"!w-[50%]"},{default:y(()=>[e("div",F,[K,e("div",z,[(i(!0),c(V,null,P(n.data,s=>(i(),c("div",{class:"flex items-start gap-4",key:s.commentId,ref_for:!0,ref:"observedElement"},[e("span",O,[r(_,{src:s.user.avatarUrl+"?param=60y60",alt:s.user.nickname},null,8,["src","alt"])]),e("div",R,[e("div",W,[e("div",H,l(s.user.nickname),1),e("div",J,l(s.timeStr),1),e("div",X," IP: "+l(s.ipLocation.location),1)]),e("p",G,l(s.content),1)])]))),128))])])]),_:1},8,["modelValue","direction"])}const Y=M(E,[["render",Q],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/components/CommentPopup/index.vue"]]),Z={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},tt=e("path",{fill:"currentColor",d:"M8 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4-9A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 .3-.71a1 1 0 0 0-.3-.7A8 8 0 1 1 12 20"},null,-1),et=[tt];function st(d,a){return i(),c("svg",Z,[...et])}const at={name:"uil-comment-dots",render:st},ot={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},lt=e("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"},null,-1),nt=[lt];function rt(d,a){return i(),c("svg",ot,[...nt])}const it={name:"mdi-cards-heart-outline",render:rt},ct={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},dt=e("path",{fill:"currentColor",d:"m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"},null,-1),_t=[dt];function mt(d,a){return i(),c("svg",ct,[..._t])}const ut={name:"material-symbols-play-circle-outline",render:mt},pt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ht=e("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-2.5-3.5l7-4.5l-7-4.5z"},null,-1),ft=[ht];function xt(d,a){return i(),c("svg",pt,[...ft])}const yt={name:"ic-outline-play-circle",render:xt},gt=C({__name:"index",setup(d,{expose:a}){a();const n=B(),t=N({playlistData:{playlist:{tracks:[]}},commentListData:[],drawer:!1}),{playlistData:p,commentListData:h,drawer:_}=I(t);j(()=>{q(n.query.id).then(o=>{t.playlistData=o})});function m(o){if(o<1e4)return o.toString();if(o<1e5){const u=(o/1e4).toFixed(1);return u.endsWith(".0")?u.slice(0,-2)+"万":u+"万"}else return(o/1e4).toFixed(0)+"万"}function s(o){return new Date(o).toLocaleString()}const x={route:n,state:t,playlistData:p,commentListData:h,drawer:_,formatNumber:m,formattedDate:s,getCommentPlaylist:(o=1)=>{k({offset:o,id:n.query.id}).then(u=>{t.commentListData=t.commentListData.concat(u.comments)})},showDrawer:()=>{t.drawer=!0,!(t.commentListData.length>0)&&k({offset:1,id:n.query.id}).then(o=>{t.commentListData=o.comments})}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),vt={class:"container h-full px-4 md:px-6 py-12 w-full box-border flex flex-1 flex-col overflow-x-hidden"},wt={class:"flex flex-col md:flex-row h-full gap-8 md:gap-12 lg:gap-16"},Dt={class:"lg:flex flex-col items-center gap-4 relative hidden w-[320px]"},bt=["src"],kt={class:"absolute top-2 right-2 bg-gray-400/50 dark:bg-gray-600/50 px-2 py-1 rounded-md text-white text-sm flex items-center gap-1"},Ct={class:"text-center flex flex-col gap-3"},Mt={class:"text-2xl font-bold tracking-tight dark:text-white"},Vt={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},Pt=["src"],St={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},Tt={class:"bg-muted dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},Lt=["title"],Bt={class:"flex items-center justify-center gap-1 w-full"},Nt={class:"flex items-center"},It={class:"text-sm dark:text-gray-300"},jt={class:"flex items-center"},qt={class:"text-sm dark:text-gray-300"},Ut={class:"flex items-center"},$t={class:"text-sm dark:text-gray-300"},At={class:"text-muted-foreground dark:text-gray-300 text-sm"},Et={class:"text-muted-foreground dark:text-gray-300 text-sm"},Ft={class:"gap-6 flex flex-1"},Kt={class:"relative w-full h-full overflow-hidden"};function zt(d,a,n,t,p,h){var u,D;const _=yt,m=ut,s=g("el-button"),v=it,w=at,x=A,o=Y;return i(),c("div",vt,[e("div",wt,[e("div",Dt,[e("img",{src:t.playlistData.playlist.coverImgUrl+"?param=560y560",alt:"Summer Vibes Playlist",width:"300",height:"300",class:"rounded-lg object-cover aspect-square"},null,8,bt),e("div",kt,[r(_),U(" "+l(t.formatNumber(t.playlistData.playlist.playCount)),1)]),e("div",Ct,[e("h1",Mt,l(t.playlistData.playlist.name),1),e("div",Vt,[e("img",{src:(u=t.playlistData.playlist.creator)==null?void 0:u.avatarUrl,alt:"DJ Sunny",width:"24",height:"24",class:"rounded-full",style:{"aspect-ratio":"24 / 24","object-fit":"cover"}},null,8,Pt),e("span",null,l((D=t.playlistData.playlist.creator)==null?void 0:D.nickname),1)]),e("div",St,[(i(!0),c(V,null,P(t.playlistData.playlist.tags,f=>(i(),c("span",Tt,l(f),1))),256))]),e("p",{class:"text-muted-foreground dark:text-gray-300 text-sm md:line-clamp-5",title:t.playlistData.playlist.description},l(t.playlistData.playlist.description),9,Lt),e("div",Bt,[e("div",Nt,[r(s,{text:"",circle:"",class:"!p-3"},{default:y(()=>[r(m,{class:"text-xl dark:text-white"})]),_:1}),e("span",It,l(t.formatNumber(t.playlistData.playlist.playCount)),1)]),e("div",jt,[r(s,{text:"",circle:"",class:"!p-3"},{default:y(()=>[r(v,{class:"text-xl dark:text-white"})]),_:1}),e("span",qt,l(t.formatNumber(t.playlistData.playlist.subscribedCount)),1)]),e("div",Ut,[r(s,{text:"",circle:"",class:"!p-3",onClick:t.showDrawer},{default:y(()=>[r(w,{class:"text-xl dark:text-white"})]),_:1}),e("span",$t,l(t.formatNumber(t.playlistData.playlist.commentCount)),1)])]),e("p",At,l(t.formattedDate(t.playlistData.playlist.createTime)),1),e("span",Et,l(t.playlistData.playlist.trackCount)+" songs ",1)])]),e("div",Ft,[e("div",Kt,[r(x,{modelValue:t.playlistData.playlist.tracks,"onUpdate:modelValue":a[0]||(a[0]=f=>t.playlistData.playlist.tracks=f)},null,8,["modelValue"])])])]),r(o,{modelValue:t.drawer,"onUpdate:modelValue":a[1]||(a[1]=f=>t.drawer=f),data:t.commentListData,onDIntersect:t.getCommentPlaylist},null,8,["modelValue","data"])])}const Ht=M(gt,[["render",zt],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/songlist/index.vue"]]);export{Ht as default};
