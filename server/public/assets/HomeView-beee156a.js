import{U as v}from"./userService-da882bb3.js";import{r as _,f as p,a as s,o as i,c as u,w as e,i as t,b as o,t as n}from"./index-9b1bf6f6.js";import"./axios-c0bebe37.js";const y={__name:"HomeView",setup(f){const d=new v,a=_({first_name:"",last_name:""}),r=_(!0);return p(async()=>{a.value=await d.index(),r.value=!1}),(h,x)=>{const l=s("v-card-text"),c=s("v-card"),m=s("v-card-actions");return!a.value&&!r.value?(i(),u(c,{key:0,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[t(" Üdvözöllek ")]),default:e(()=>[o(l,null,{default:e(()=>[t("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(i(),u(c,{key:1,class:"mx-auto",width:"400","prepend-icon":"mdi-home"},{title:e(()=>[t(" Üdvözöllek ")]),default:e(()=>[o(l,null,{default:e(()=>[t(n(a.value.first_name)+" "+n(a.value.last_name),1)]),_:1}),o(l,null,{default:e(()=>[t(n(a.value.email),1)]),_:1}),o(l,null,{default:e(()=>[t(n(a.value.phone),1)]),_:1}),o(m)]),_:1}))}}};export{y as default};
