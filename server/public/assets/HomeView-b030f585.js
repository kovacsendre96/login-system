import{r as i,o as h,a as c,b as n,c as m,t as o,d as v,e as r,w as e,F as w,U as x,f as a,g as l}from"./index-ca4a7192.js";const g={key:0},V={__name:"HomeView",setup(y){const u=new x,t=i({first_name:"",last_name:""}),_=i(!0);h(async()=>{t.value=await u.index(),_.value=!1});const f=async()=>{await u.logOut(),window.location.reload()};return(z,b)=>{const s=c("v-card-text"),d=c("v-card"),p=c("v-btn"),k=c("v-card-actions");return n(),m(w,null,[_.value?v("",!0):(n(),m("h1",g,"Üdv neked "+o(t.value.first_name)+" "+o(t.value.last_name),1)),t.value?(n(),r(d,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[l(s,null,{default:e(()=>[a("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(n(),r(d,{key:2,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[a(" Üdvözöllek ")]),default:e(()=>[l(s,null,{default:e(()=>[a(o(t.value.first_name)+" "+o(t.value.last_name),1)]),_:1}),l(s,null,{default:e(()=>[a(o(t.value.email),1)]),_:1}),l(s,null,{default:e(()=>[a(o(t.value.phone),1)]),_:1}),l(k,null,{default:e(()=>[t.value?(n(),r(p,{key:0,variant:"outlined",color:"info",class:"m4",onClick:f},{default:e(()=>[a(" Logout ")]),_:1})):v("",!0)]),_:1})]),_:1}))],64)}}};export{V as default};