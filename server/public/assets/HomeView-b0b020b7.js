import{U as p}from"./userService-da882bb3.js";import{r as d,o as k,a as l,b as c,e as r,w as e,g as a,d as o,t as s,f as w}from"./index-6368dcd3.js";import"./axios-c0bebe37.js";const C={__name:"HomeView",setup(h){const u=new p,t=d({first_name:"",last_name:""}),i=d(!0);k(async()=>{t.value=await u.index(),i.value=!1});const m=async()=>{await u.logOut(),window.location.reload()};return(x,z)=>{const n=l("v-card-text"),_=l("v-card"),v=l("v-btn"),f=l("v-card-actions");return!t.value&&!i.value?(c(),r(_,{key:0,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(c(),r(_,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a(s(t.value.first_name)+" "+s(t.value.last_name),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.email),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.phone),1)]),_:1}),o(f,null,{default:e(()=>[t.value?(c(),r(v,{key:0,variant:"outlined",color:"info",class:"m4",onClick:m},{default:e(()=>[a(" Kijelentkezés ")]),_:1})):w("",!0)]),_:1})]),_:1}))}}};export{C as default};