import{r as s,a as t,o as _,c as g,w as r,b as e,d as x,e as h,f as k,F as U}from"./index-907c692f.js";import{U as b}from"./userService-da882bb3.js";import"./axios-c0bebe37.js";const C={__name:"Navbar",setup(p){const i=s(!0),o=s(!0);return(u,n)=>{const v=t("v-btn"),a=t("v-list-item"),l=t("v-divider"),m=t("v-list"),d=t("v-navigation-drawer"),f=t("v-main"),w=t("v-layout"),y=t("v-card");return _(),g(y,null,{default:r(()=>[e(w,null,{default:r(()=>[e(d,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=c=>i.value=c),rail:o.value,permanent:"",onClick:n[2]||(n[2]=c=>o.value=!1)},{default:r(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"John Leider",nav:""},{append:r(()=>[e(v,{variant:"text",icon:"mdi-chevron-left",onClick:n[0]||(n[0]=x(c=>o.value=!o.value,["stop"]))})]),_:1}),e(l),e(m,{density:"compact",nav:""},{default:r(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),e(a,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1},8,["modelValue","rail"]),e(f,{style:{height:"250px"}})]),_:1})]),_:1})}}},$={__name:"MainLayout",setup(p){const i=new b,o=s(),u=s(!0),n=async()=>{o.value=await i.index()};return h(async()=>{await n(),u.value=!1}),(v,a)=>{const l=t("router-view");return _(),k(U,null,[e(C),e(l)],64)}}};export{$ as default};
