import{e as l,f as c,g as o,d as w,a2 as M,a3 as C,a as D,t as V,o as B,a4 as E,_ as I,b as m,h,w as f,F as P,k as R,D as O,m as y,s as L,p as A,n as F}from"./index-BInQ2O41.js";const H={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},N=o("path",{fill:"currentColor",d:"M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"},null,-1),W=[N];function $(a,n){return l(),c("svg",H,[...W])}const j={name:"material-symbols-wb-sunny-outline-rounded",render:$},K={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},U=o("path",{fill:"currentColor",d:"M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"},null,-1),z=[U];function G(a,n){return l(),c("svg",K,[...z])}const J={name:"material-symbols-dark-mode-outline-rounded",render:G},Q=w({__name:"index",setup(a,{expose:n}){n();const i=M(),{switchDark:e,changePrimary:r}=C(),d=D({colorList:[]}),{colorList:_}=V(d),p=s=>{const x=t(s);r(x)};function g(s){i.setPrimary(s),r(s)}const T=()=>{i.setPrimary("#000000"),r("#000000")};function t(s){const x=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/,u=s.match(x);if(!u)throw new Error("Invalid RGBA string");const v=parseInt(u[1],10),k=parseInt(u[2],10),S=parseInt(u[3],10);return`#${((1<<24)+(v<<16)+(k<<8)+S).toString(16).slice(1)}`}B(()=>{E({method:"get",url:"https://mock.mengxuegu.com/mock/634f6425369a770d74bbf7b9/example/colorsList"}).then(({data:s})=>{d.colorList=s})});const q={themeStore:i,switchDark:e,changePrimary:r,state:d,colorList:_,changePrimarys:p,changeColor:g,reset:T,rgbaToHex:t,get MaterialSymbolsWbSunnyOutlineRounded(){return j},get MaterialSymbolsDarkModeOutlineRounded(){return J}};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}),b=a=>(A("data-v-d4923dd8"),a=a(),F(),a),X={class:"w-full"},Y={class:"p-4"},Z=b(()=>o("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"黑暗模式",-1)),ee={class:"p-4"},te=b(()=>o("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"主题",-1)),oe={class:"grid grid-cols-auto-fill gap-4"},ne=["onClick"],se={class:"text-sm line-clamp-1 text-gray-600 dark:text-gray-300"},ae={class:"p-4"},re=b(()=>o("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"自定义",-1)),le={class:"flex items-center space-x-2"};function ce(a,n,i,e,r,d){const _=m("el-switch"),p=m("el-scrollbar"),g=m("el-color-picker"),T=m("el-button");return l(),c("div",X,[o("div",Y,[Z,h(_,{modelValue:e.themeStore.isDark,"onUpdate:modelValue":n[0]||(n[0]=t=>e.themeStore.isDark=t),"active-action-icon":e.MaterialSymbolsWbSunnyOutlineRounded,"inactive-action-icon":e.MaterialSymbolsDarkModeOutlineRounded,onChange:e.switchDark},null,8,["modelValue","active-action-icon","inactive-action-icon","onChange"])]),o("div",ee,[te,h(p,{height:"400px",class:"rounded-lg dark:bg-gray-800"},{default:f(()=>[o("div",oe,[(l(!0),c(P,null,R(e.colorList,t=>(l(),c("a",{href:"javascript:;",key:t.name,onClick:q=>e.changeColor(t.hex),class:"bg-lightblue text-center rounded-md transition-transform duration-200 ease-in-out hover:scale-105"},[o("div",{class:"w-full h-32 rounded-lg",style:O({backgroundColor:t.hex})},null,4),o("span",se,y(t.name)+" ("+y(t.pinyin)+") ",1)],8,ne))),128))])]),_:1})]),o("div",ae,[re,o("div",le,[h(g,{modelValue:e.themeStore.primary,"onUpdate:modelValue":n[1]||(n[1]=t=>e.themeStore.primary=t),"show-alpha":"",onChange:e.changePrimarys},null,8,["modelValue"]),h(T,{color:"#000",onClick:e.reset},{default:f(()=>[L("重置默认")]),_:1})])])])}const ue=I(Q,[["render",ce],["__scopeId","data-v-d4923dd8"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/theme/index.vue"]]);export{ue as default};
