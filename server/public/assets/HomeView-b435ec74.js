import{r as i,o as p,a as l,b as c,c as r,w as e,U as k,d as a,e as o,t as s,f as w}from"./index-a41c5725.js";const g={__name:"HomeView",setup(h){const u=new k,t=i({first_name:"",last_name:""}),_=i(!0);p(async()=>{t.value=await u.index(),_.value=!1});const m=async()=>{await u.logOut(),window.location.reload()};return(x,y)=>{const n=l("v-card-text"),d=l("v-card"),v=l("v-btn"),f=l("v-card-actions");return!t.value&&!_.value?(c(),r(d,{key:0,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(c(),r(d,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[o(n,null,{default:e(()=>[a(s(t.value.first_name)+" "+s(t.value.last_name),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.email),1)]),_:1}),o(n,null,{default:e(()=>[a(s(t.value.phone),1)]),_:1}),o(f,null,{default:e(()=>[t.value?(c(),r(v,{key:0,variant:"outlined",color:"info",class:"m4",onClick:m},{default:e(()=>[a(" Logout ")]),_:1})):w("",!0)]),_:1})]),_:1}))}}};export{g as default};
