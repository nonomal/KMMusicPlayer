import{d as f,u as p,r as g,t as y,b as k,v as d,c as t,a as r,x,y as M,g as o,n as w,z as C,F as D,k as I,q as K,o as n,f as V,l as B,s as N,_ as P}from"./index-xuQRkY2E.js";const Q={class:"search-container"},R={key:0},S={key:0,class:"anime-list"},z=["onClick"],E={class:"anime-title"},F={key:1,class:"no-content"},T=f({__name:"index",setup($){const u=p(),e=g({animes:[],searchQuery:"",currentPage:1,loading:!1}),{animes:l,searchQuery:i,loading:_}=y(e);k(()=>{e.loading=!0,d({name:"刀剑神域"}).then(({data:s})=>{e.animes=s,e.loading=!1})});function m(){e.animes=[],e.loading=!0,d({name:e.searchQuery}).then(({data:s})=>{e.animes=s,e.loading=!1}).catch(s=>{console.error("Search error:",s)}).finally(()=>{e.loading=!1})}function h(s){u.push(`/anim/animeDetails?id=${s}`)}return(s,c)=>{const v=N;return n(),t("div",null,[r("div",Q,[x(r("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>w(i)?i.value=a:null),type:"text",class:"search-input",placeholder:"搜索动漫...",onKeydown:C(m,["enter"])},null,544),[[M,o(i)]])]),o(_)?K("",!0):(n(),t("div",R,[o(l).length>0?(n(),t("div",S,[(n(!0),t(D,null,I(o(l),a=>(n(),t("div",{key:a.videoId,class:"anime-card",onClick:b=>h(a.videoId)},[V(v,{lazy:"",src:a.cover,alt:a.title,class:"anime-cover"},null,8,["src","alt"]),r("h3",E,B(a.title),1)],8,z))),128))])):(n(),t("div",F,"无内容"))]))])}}}),A=P(T,[["__scopeId","data-v-c82407a0"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/anim/index.vue"]]);export{A as default};
