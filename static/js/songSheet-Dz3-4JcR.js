import{o,c as n,a as t,d as M,bq as V,ao as x,bm as k,V as T,L as $,F as Z,k as P,f as d,l as c,q as w,br as S,bn as C,s as H,_ as B}from"./index-xuQRkY2E.js";import{u as E}from"./useIntersectionObserver-Z01xydaK.js";const I={viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},N=t("path",{fill:"currentColor",d:"M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z"},null,-1),j=[N];function z(a,r){return o(),n("svg",I,[...j])}const A={name:"ph-film-strip",render:z},D={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},F=t("path",{fill:"currentColor",d:"m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"},null,-1),L=[F];function K(a,r){return o(),n("svg",D,[...L])}const U={name:"material-symbols-play-circle-outline-rounded",render:K},O={class:"music-list"},Q=["onDblclick"],G={class:"item-section cover-container yx-col-6"},J={class:"ml-2"},R={class:"item-section artist-container yx-col-6"},W={class:"tx-ellipsis"},X={class:"item-section time-container yx-col-4"},Y={class:"item-section time-container yx-col-4 text-center"},ee={class:"item-section controls-container yx-col-4"},se={class:"button"},te={key:0,class:"button"},oe=M({__name:"songSheet",props:{modelValue:{type:Array},modelModifiers:{}},emits:V(["query"],["update:modelValue"]),setup(a,{emit:r}){const v=x(a,"modelValue"),y=k(),m=T("musicPlayer");if(!m)throw new Error("musicPlayer is not provided");const{addTrackAndPlay:f}=m,u=$([]),g=r;E(u,{initialPageNum:1,pageSize:10,threshold:.1},e=>{g("query",e)});function q(e){return S(e)}function h(e){C(e.id).then(({data:p})=>{let i={id:e.id,title:e.name,singer:e.ar.map(l=>l.name).join(" / "),album:e.al.name,cover:e.al.picUrl,source:p[0].url,time:e.dt,mv:e.mv};y.addTrackAndPlay(i),f()})}return(e,p)=>{const i=H,l=U,b=A;return o(),n("div",O,[(o(!0),n(Z,null,P(v.value,s=>(o(),n("div",{key:s.id,ref_for:!0,ref_key:"observedElement",ref:u,class:"list-item",onDblclick:_=>h(s)},[t("div",G,[d(i,{lazy:"",class:"cover",fit:"cover",src:s.al.picUrl+"?param=100y100",alt:s.name},null,8,["src","alt"]),t("span",J,c(s.name),1)]),t("div",R,[t("span",W,c(s.ar.map(_=>_.name).join(" / ")),1)]),t("div",X,c(s.al.name),1),t("div",Y,c(q(s.dt)),1),t("div",ee,[t("div",se,[d(l,{class:"icon",onClick:_=>h(s)},null,8,["onClick"])]),s.mv!=0?(o(),n("div",te,[d(b,{class:"icon"})])):w("",!0)])],40,Q))),128))])}}}),re=B(oe,[["__scopeId","data-v-c7ebbab8"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/components/songSheet.vue"]]);export{re as _};