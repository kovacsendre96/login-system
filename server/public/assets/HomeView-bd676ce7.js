import{a as r}from"./axios-c0bebe37.js";import{r as n,o as c,a as l,c as u,t as s,b as i}from"./index-f5dfa25d.js";class m{async index(){return r.get("/api/user").then(function(e){return e.data}).catch(function(e){console.log(e)})}}const _={key:0},g={__name:"HomeView",setup(o){const e=new m,a=n({first_name:"",last_name:""}),t=n(!0);return c(async()=>{a.value=await e.index(),t.value=!1,console.log(a.value)}),(d,f)=>t.value?i("",!0):(l(),u("h1",_,"Üdv neked "+s(a.value.first_name)+" "+s(a.value.last_name),1))}};export{g as default};
