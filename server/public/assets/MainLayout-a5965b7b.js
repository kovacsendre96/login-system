import{U as w}from"./userService-da882bb3.js";import{r as c,o as y,a as n,b as i,c as s,w as t,d as e,e as B,f as L,F as N,g as j}from"./index-130731b9.js";import"./axios-c0bebe37.js";const R={__name:"Navbar",setup(g){const r=new w,o=c(),d=c(!0),l=c("left"),p=async()=>{o.value=await r.index()},v=u=>{window.innerWidth<768?l.value="top":l.value="left"};y(async()=>{await p(),d.value=!1,v(),window.addEventListener("resize",u=>{u.target.innerWidth,v()})});const m=async()=>{await r.logOut(),window.location.reload()};return(u,U)=>{const a=n("v-list-item"),k=n("v-divider"),_=n("RouterLink"),f=n("v-list"),h=n("v-navigation-drawer"),z=n("v-main"),b=n("v-layout"),x=n("v-card");return i(),s(x,null,{default:t(()=>[e(b,null,{default:t(()=>[e(h,{permanent:"",location:l.value},{prepend:t(()=>[o.value?(i(),s(a,{key:0,lines:"two",title:`${o.value.first_name} ${o.value.last_name}`,subtitle:"Bejelentkezve"},null,8,["title"])):(i(),s(a,{key:1,lines:"two",title:"Nincs bejelentkezve",subtitle:""}))]),default:t(()=>[e(k),o.value?(i(),s(f,{key:0,density:"compact",nav:""},{default:t(()=>[e(_,{to:{name:"Welcome"}},{default:t(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"})]),_:1}),e(a,{"prepend-icon":"mdi-logout",title:"Kijelentkezés",value:"account",onClick:m})]),_:1})):(i(),s(f,{key:1,density:"compact",nav:""},{default:t(()=>[e(_,{to:{name:"Welcome"}},{default:t(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"})]),_:1}),e(_,{to:{name:"Login"}},{default:t(()=>[e(a,{"prepend-icon":"mdi-login",title:"Bejelentkezés",value:"account"})]),_:1}),e(_,{to:{name:"Registration"}},{default:t(()=>[e(a,{"prepend-icon":"mdi-account-plus",title:"Regisztráció",value:"users"})]),_:1})]),_:1}))]),_:1},8,["location"]),e(z,null,{default:t(()=>[B(u.$slots,"content")]),_:3})]),_:3})]),_:3})}}},S=j("div",{class:"pa-0"},null,-1),E={__name:"MainLayout",setup(g){const r=new w,o=c(),d=c(!0),l=async()=>{o.value=await r.index()};return y(async()=>{await l(),d.value=!1}),(p,v)=>{const m=n("router-view");return i(),L(N,null,[e(R,null,{content:t(()=>[e(m)]),_:1}),S],64)}}};export{E as default};