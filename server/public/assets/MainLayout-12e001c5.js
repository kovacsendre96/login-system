import{r,a as t,o as v,c as g,w as i,b as e,d as x,e as h,f as U,F as k}from"./index-fdd4b7ee.js";import{U as M}from"./userService-da882bb3.js";import"./axios-c0bebe37.js";const b={__name:"Navbar",setup(_){const c=r(!0);r([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]);const o=r(!0);return(u,n)=>{const m=t("v-btn"),a=t("v-list-item"),s=t("v-divider"),p=t("v-list"),d=t("v-navigation-drawer"),f=t("v-main"),w=t("v-layout"),y=t("v-card");return v(),g(y,null,{default:i(()=>[e(w,null,{default:i(()=>[e(d,{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=l=>c.value=l),rail:o.value,permanent:"",onClick:n[2]||(n[2]=l=>o.value=!1)},{default:i(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"John Leider",nav:""},{append:i(()=>[e(m,{variant:"text",icon:"mdi-chevron-left",onClick:n[0]||(n[0]=x(l=>o.value=!o.value,["stop"]))})]),_:1}),e(s),e(p,{density:"compact",nav:""},{default:i(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),e(a,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1},8,["modelValue","rail"]),e(f,{style:{height:"250px"}})]),_:1})]),_:1})}}},$={__name:"MainLayout",setup(_){const c=new M,o=r(),u=r(!0),n=async()=>{o.value=await c.index()};return h(async()=>{await n(),u.value=!1}),(m,a)=>{const s=t("router-view");return v(),U(k,null,[e(b),e(s)],64)}}};export{$ as default};