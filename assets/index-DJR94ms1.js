import{d as x,a as y,t as P,u as b,r as w,o as k,q as c,v as L,_ as M,b as v,e as d,f as u,h as g,w as V,g as n,F as S,k as B,m as _}from"./index-BInQ2O41.js";import{u as E}from"./useIntersectionObserver-Cna5UKx-.js";const I=x({__name:"index",setup(C,{expose:o}){o();const e=y({Playlist:[],CatList:[{name:"全部",label:"全部"}],currentCat:["全部"]}),{currentCat:s,CatList:p,Playlist:f}=P(e),r=b(),l=w([]);E(l,{initialPageNum:1,pageSize:10,threshold:.1},t),k(()=>{c({offset:1,cat:e.currentCat}).then(({playlists:a})=>{e.Playlist=a}),L().then(({sub:a})=>{e.CatList=e.CatList.concat(a)})});function t(a){c({offset:a+1,cat:e.currentCat}).then(({playlists:i})=>{e.Playlist=e.Playlist.concat(i)})}function m(a){e.Playlist=[],c({offset:1,cat:a.join()}).then(({playlists:i})=>{e.Playlist=i})}const h={state:e,currentCat:s,CatList:p,Playlist:f,router:r,observedElement:l,handleIntersect:t,catChange:m};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),N={class:"h-full w-full p-4"},j={class:"flex items-center"},z={class:"flex-1 pt-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"},F=["onClick"],K={class:"p-2"},O={class:"font-medium text-sm line-clamp-1"},R={class:"flex items-center w-full gap-2 text-sm text-muted-foreground"},U={class:"text-xs line-clamp-1"};function q(C,o,e,s,p,f){const r=v("el-select-v2"),l=v("el-image");return d(),u("div",N,[g(r,{modelValue:s.currentCat,"onUpdate:modelValue":o[0]||(o[0]=t=>s.currentCat=t),filterable:"",options:s.CatList,style:{width:"240px"},multiple:"",clearable:"",props:{label:"name",value:"name"},onChange:s.catChange},{default:V(({item:t})=>[n("div",j,[n("span",null,_(t.name),1)])]),_:1},8,["modelValue","options"]),n("section",z,[(d(!0),u(S,null,B(s.Playlist,t=>(d(),u("div",{class:"group relative rounded-lg overflow-hidden cursor-pointer",key:t.id,ref_for:!0,ref:"observedElement",onClick:m=>s.router.push(`/songlist?id=${t.id}`)},[g(l,{src:t.coverImgUrl+"?param=260y260",lazy:"",class:"transition-opacity rounded-lg"},null,8,["src"]),n("div",K,[n("h3",O,_(t.name),1),n("div",R,[n("span",U,_(t.description),1)])])],8,F))),128))])])}const G=M(I,[["render",q],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/discover/songlist/index.vue"]]);export{G as default};
