var g=(h,l,r)=>new Promise((_,a)=>{var s=o=>{try{n(r.next(o))}catch(c){a(c)}},d=o=>{try{n(r.throw(o))}catch(c){a(c)}},n=o=>o.done?_(o.value):Promise.resolve(o.value).then(s,d);n((r=r.apply(h,l)).next())});import{k as B,j as E,p as R,a as S}from"./element-plus-aaf5bffe.js";import{_ as j,G as w,i as C}from"./index-2ff6927e.js";import{b as N,u as I}from"./vue-router-6e50d621.js";import{Z as T,a7 as U,e as V,o as p,c as f,a as t,U as m,S as u,u as e,W as i,a6 as y,P as A,a8 as G,R as L}from"./@vue-b6763d16.js";import"./@element-plus-3d5ed1a4.js";import"./@vueuse-ae6f4f55.js";import"./lodash-es-9cc69f4e.js";import"./@ctrl-86a38320.js";import"./@popperjs-7c8154ca.js";import"./escape-html-19374969.js";import"./dayjs-39b5b250.js";import"./normalize-wheel-es-ed76fb12.js";import"./pinia-358b124a.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./axios-e76ab20a.js";const O={class:"content-section menuBar-mv"},P={class:"m-artist"},D={style:{width:"250px"}},F={class:"artist-name"},J={class:"artist-h2"},M={class:"listcover"},W={href:"javascript:;"},Z={href:"javascript:;"},$={class:"playerButton"},q={class:"tags"},z={class:"anthology"},H={__name:"[id]",setup(h){const l=w(),r=N(),_=I(),a=T({list:{},loading:!0}),{list:s,loading:d}=U(a);return V(()=>g(this,null,function*(){a.loading=!0,C({id:JSON.parse(decodeURIComponent(r.params.id))}).then(({data:n})=>{a.loading=!1,a.list=n.data,l.setAnthologyObj(n.data)})})),(n,o)=>{const c=E,b=R,x=S,k=B;return p(),f("div",null,[t("div",O,[m(k,{rows:5,animated:"",loading:e(d)},{default:u(()=>[t("div",P,[t("div",D,[m(c,{src:e(s).cover,style:{width:"220px",height:"250px"}},null,8,["src"])]),t("div",F,[t("h2",J,i(e(s).title),1),t("div",M,[t("span",W,i(e(s).actor),1),t("span",Z,i(e(s).director),1)]),t("div",$,i(e(s).region),1),t("div",q,[m(b,{class:"tags-item"},{default:u(()=>[y(i(e(s).videoType),1)]),_:1})]),t("p",null,i(e(s).descs),1)])]),t("div",z,[(p(!0),f(A,null,G(e(s).chapterList,v=>(p(),L(x,{class:"antBtn",type:"primary",onClick:K=>e(_).push({name:"playerAnimation",params:{id:v.chapterPath}}),round:""},{default:u(()=>[y(i(v.title),1)]),_:2},1032,["onClick"]))),256))])]),_:1},8,["loading"])])])}}},mt=j(H,[["__scopeId","data-v-b243abfc"]]);export{mt as default};
