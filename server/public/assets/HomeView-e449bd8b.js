import{U as v}from"./userService-da882bb3.js";import{r as _,o as f,a as s,b as u,c as d,w as e,h as t,d as l,t as n}from"./index-f81e7ab8.js";import"./axios-c0bebe37.js";const y={__name:"HomeView",setup(p){const i=new v,a=_({first_name:"",last_name:""}),r=_(!0);return f(async()=>{a.value=await i.index(),r.value=!1}),(x,k)=>{const o=s("v-card-text"),c=s("v-card"),m=s("v-card-actions");return!a.value&&!r.value?(u(),d(c,{key:0,class:"mx-auto w-75"},{title:e(()=>[t(" Üdvözöllek ")]),default:e(()=>[l(o,null,{default:e(()=>[t("A tartalom eléréséhez jelentkezz be vagy hozz létre új fiókot ")]),_:1})]),_:1})):(u(),d(c,{key:1,class:"mx-auto w-75"},{title:e(()=>[t(" Üdvözöllek ")]),default:e(()=>[l(o,null,{default:e(()=>[t(n(a.value.first_name)+" "+n(a.value.last_name),1)]),_:1}),l(o,null,{default:e(()=>[t(n(a.value.email),1)]),_:1}),l(o,null,{default:e(()=>[t(n(a.value.phone),1)]),_:1}),l(m)]),_:1}))}}};export{y as default};
