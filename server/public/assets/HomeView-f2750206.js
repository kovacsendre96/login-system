import{U as p}from"./userService-da882bb3.js";import{r as d,f as k,a as l,o as c,c as r,w as e,h as a,b as o,t as s,e as h}from"./index-31d25d00.js";import"./axios-c0bebe37.js";const C={__name:"HomeView",setup(w){const u=new p,t=d({first_name:"",last_name:""}),i=d(!0);k(async()=>{t.value=await u.index(),i.value=!1});const m=async()=>{await u.logOut(),window.location.reload()};return(x,z)=>{const n=l("v-card-text"),_=l("v-card"),v=l("v-btn"),f=l("v-card-actions");return!t.value&&!i.value?(c(),r(_,{key:0,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(c(),r(_,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a(s(t.value.first_name)+" "+s(t.value.last_name),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.email),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.phone),1)]),_:1}),o(f,null,{default:e(()=>[t.value?(c(),r(v,{key:0,variant:"outlined",color:"info",class:"m4",onClick:m},{default:e(()=>[a(" Kijelentkezés ")]),_:1})):h("",!0)]),_:1})]),_:1}))}}};export{C as default};
