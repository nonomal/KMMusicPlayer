var f=(g,l,t)=>new Promise((c,e)=>{var p=o=>{try{s(t.next(o))}catch(a){e(a)}},u=o=>{try{s(t.throw(o))}catch(a){e(a)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,u);s((t=t.apply(g,l)).next())});import{k as P,l as k}from"./element-plus-aaf5bffe.js";import{s as L}from"./index-f8eaa5b8.js";import{u as x}from"./vue-router-6e50d621.js";import{Z as B,a7 as S,e as w,o as d,c as m,a as n,U as h,S as E,u as i,P as R,a8 as U,W as j,z}from"./@vue-b6763d16.js";import"./@element-plus-3d5ed1a4.js";import"./@vueuse-ae6f4f55.js";import"./lodash-es-9cc69f4e.js";import"./@ctrl-86a38320.js";import"./@popperjs-7c8154ca.js";import"./escape-html-19374969.js";import"./dayjs-39b5b250.js";import"./normalize-wheel-es-ed76fb12.js";import"./pinia-358b124a.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./axios-e76ab20a.js";const N={class:"content-section menuBar-mv"},V={class:"apps-card"},q=["onClick"],D={class:"app-card"},F=["src"],I={href:"javascript:;"},M={class:"pagination"},et={__name:"index",setup(g){const l=x(),t=B({list:[],currentPage:1,loading:!0,songListCount:0}),{list:c,currentPage:e,loading:p,songListCount:u}=S(t);w(()=>{s()});const s=()=>f(this,null,function*(){t.loading=!0;const{data:a}=yield L({limit:30,offset:(t.currentPage-1)*30});t.list=a,t.songListCount=a.total,t.loading=!1}),o=a=>{s()};return(a,_)=>{const v=k,C=P;return d(),m("div",null,[n("div",N,[h(C,{rows:5,animated:"",loading:i(p)},{default:E(()=>[n("div",V,[(d(!0),m(R,null,U(i(c).playlists,(r,y)=>(d(),m("div",{class:"apps-item",key:y,onClick:W=>i(l).push({path:"/playList",query:{id:r.id}})},[n("div",D,[n("img",{src:r.coverImgUrl+"?param=200y200",alt:""},null,8,F)]),n("a",I,j(r.name),1)],8,q))),128))]),n("div",M,[h(v,{onCurrentChange:o,currentPage:i(e),"onUpdate:currentPage":_[0]||(_[0]=r=>z(e)?e.value=r:null),"page-size":30,layout:"prev, pager, next, jumper",total:i(u)},null,8,["currentPage","total"])])]),_:1},8,["loading"])])])}}};export{et as default};
