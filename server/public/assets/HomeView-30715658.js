import{a as _}from"./axios-c0bebe37.js";import{r as m,o as g,a as c,b as r,c as u,w as t,d as n,e as o,t as s,f as k}from"./index-8cd2518c.js";class x{async index(){return _.get("/api/user").then(function(e){return e.data}).catch(function(e){console.log(e)})}async logOut(){return _.get("/api/logout").then(function(e){return e.data}).catch(function(e){console.log(e)})}}const C={__name:"HomeView",setup(v){const e=new x,a=m({first_name:"",last_name:""}),i=m(!0);g(async()=>{a.value=await e.index(),i.value=!1});const f=async()=>{await e.logOut(),window.location.reload()};return(w,y)=>{const l=c("v-card-text"),d=c("v-card"),p=c("v-btn"),h=c("v-card-actions");return!a.value&&!i.value?(r(),u(d,{key:0,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:t(()=>[n(" Üdvözöllek ")]),default:t(()=>[o(l,null,{default:t(()=>[n("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(r(),u(d,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:t(()=>[n(" Üdvözöllek ")]),default:t(()=>[o(l,null,{default:t(()=>[n(s(a.value.first_name)+" "+s(a.value.last_name),1)]),_:1}),o(l,null,{default:t(()=>[n(s(a.value.email),1)]),_:1}),o(l,null,{default:t(()=>[n(s(a.value.phone),1)]),_:1}),o(h,null,{default:t(()=>[a.value?(r(),u(p,{key:0,variant:"outlined",color:"info",class:"m4",onClick:f},{default:t(()=>[n(" Kijelentkezés ")]),_:1})):k("",!0)]),_:1})]),_:1}))}}};export{C as default};
