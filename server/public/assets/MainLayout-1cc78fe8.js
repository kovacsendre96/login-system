import{r,a as o,o as l,c,w as a,b as e,d as w,e as g,f as U,g as $,h as b,i as h,F as z}from"./index-9b1bf6f6.js";import{U as y}from"./userService-da882bb3.js";import"./axios-c0bebe37.js";const L={__name:"Navbar",setup(x){const u=new y,d=r(!0),t=r(!0),i=r(),p=r(!0),f=async()=>{i.value=await u.index()};onMounted(async()=>{await f(),p.value=!1});const m=async()=>{await u.logOut(),window.location.reload()};return(R,n)=>{const k=o("v-btn"),s=o("v-list-item"),_=o("RouterLink"),C=o("v-list"),V=o("v-navigation-drawer"),B=o("v-layout"),N=o("v-card");return l(),c(N,null,{default:a(()=>[e(B,null,{default:a(()=>[e(V,{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=v=>d.value=v),rail:t.value,permanent:"",theme:"dark",onClick:n[3]||(n[3]=v=>t.value=!1)},{default:a(()=>[t.value?(l(),c(s,{key:0},{append:a(()=>[e(k,{variant:"text",icon:"mdi-chevron-right",onClick:n[0]||(n[0]=w(v=>t.value=!t.value,["stop"]))})]),_:1})):(l(),c(s,{key:1},{append:a(()=>[e(k,{variant:"text",icon:"mdi-chevron-left",onClick:n[1]||(n[1]=w(v=>t.value=!t.value,["stop"]))})]),_:1})),e(C,{density:"compact",nav:""},{default:a(()=>[e(_,{class:"ma-2",to:{name:"Welcome"}},{default:a(()=>[e(s,{"prepend-icon":"mdi-home-city",title:"Főoldal",value:"home"})]),_:1}),i.value?g("",!0):(l(),c(_,{key:0,class:"ma-2",to:{name:"Login"}},{default:a(()=>[e(s,{"prepend-icon":"mdi-account",title:"Bejelentkezés",value:"account"})]),_:1})),i.value?g("",!0):(l(),c(_,{key:1,class:"ma-2",to:{name:"Register"}},{default:a(()=>[e(s,{"prepend-icon":"mdi-account-group-outline",title:"Regisztráció",value:"users"})]),_:1})),e(s,{"prepend-icon":"mdi-logout",title:"Kijelentkezés",value:"kijelentkezés",onClick:m})]),_:1})]),_:1},8,["modelValue","rail"])]),_:1})]),_:1})}}},M={class:"pa-0"},E={__name:"MainLayout",setup(x){const u=new y,d=r(),t=r(!0),i=async()=>{d.value=await u.index()};return U(async()=>{await i(),t.value=!1}),(p,f)=>{const m=o("router-view");return l(),$(z,null,[e(L),b("div",M,[h(" asdsad "),e(m)])],64)}}};export{E as default};
