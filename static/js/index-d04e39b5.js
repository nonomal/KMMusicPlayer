import{k as s,l as a}from"./element-plus-2073bb18.js";import{s as t}from"./index-63790c63.js";import{u as e}from"./vue-router-f9877ca9.js";import{Z as r,a7 as i,e as n,o,c as l,a as p,U as u,S as m,u as c,P as d,a8 as g,W as j,z as v}from"./@vue-06d7d904.js";import"./@element-plus-788c49e3.js";import"./@vueuse-45103712.js";import"./lodash-es-57caac06.js";import"./@ctrl-91de2ec7.js";import"./@popperjs-b78c3215.js";import"./escape-html-2f7c2e90.js";import"./dayjs-4d0ffb58.js";import"./normalize-wheel-es-3222b0a2.js";import"./pinia-da509d88.js";import"./pinia-plugin-persist-70d140bd.js";import"./axios-a8ee11a1.js";const h={class:"content-section menuBar-mv"},y={class:"apps-card"},f=["onClick"],P={class:"app-card"},x=["src"],C={href:"javascript:;"},k={class:"pagination"},w={__name:"index",setup(w){const L=e(),z=r({list:[],currentPage:1,loading:!0,songListCount:0}),{list:U,currentPage:_,loading:b,songListCount:q}=i(z);n((()=>{B()}));const B=()=>{return s=this,a=null,e=function*(){z.loading=!0;const{data:s}=yield t({limit:30,offset:30*(z.currentPage-1)});z.list=s,z.songListCount=s.total,z.loading=!1},new Promise(((t,r)=>{var i=s=>{try{o(e.next(s))}catch(a){r(a)}},n=s=>{try{o(e.throw(s))}catch(a){r(a)}},o=s=>s.done?t(s.value):Promise.resolve(s.value).then(i,n);o((e=e.apply(s,a)).next())}));var s,a,e},I=s=>{B()};return(t,e)=>{const r=a,i=s;return o(),l("div",null,[p("div",h,[u(i,{rows:5,animated:"",loading:c(b)},{default:m((()=>[p("div",y,[(o(!0),l(d,null,g(c(U).playlists,((s,a)=>(o(),l("div",{class:"apps-item",key:a,onClick:a=>c(L).push({path:"/playList",query:{id:s.id}})},[p("div",P,[p("img",{src:s.coverImgUrl+"?param=200y200",alt:""},null,8,x)]),p("a",C,j(s.name),1)],8,f)))),128))]),p("div",k,[u(r,{onCurrentChange:I,currentPage:c(_),"onUpdate:currentPage":e[0]||(e[0]=s=>v(_)?_.value=s:null),"page-size":30,layout:"prev, pager, next, jumper",total:c(q)},null,8,["currentPage","total"])])])),_:1},8,["loading"])])])}}};export{w as default};
