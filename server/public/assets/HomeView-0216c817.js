import{a as r}from"./axios-c0bebe37.js";import{r as n,o as c,a as l,c as u,t}from"./index-8d73a54c.js";class i{async index(){return r.get("/api/user").then(function(e){return e.data}).catch(function(e){console.log(e)})}}const d={__name:"HomeView",setup(s){const e=new i,a=n(),o=n(!0);return c(async()=>{a.value=await e.index(),o.value=!1,console.log(a.value)}),(m,_)=>(l(),u("h1",null,"Üdv neked "+t(a.value.first_name)+" "+t(a.value.last_name),1))}};export{d as default};