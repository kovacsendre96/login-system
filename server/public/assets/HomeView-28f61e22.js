import{a as s}from"./axios-c0bebe37.js";import{o as c}from"./index-28610f1e.js";class t{async index(){return s.get("/api/user").then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}const u={__name:"HomeView",setup(n){const e=new t;return c(async()=>{console.log("ment a req");const o=await e.index();console.log(o)}),(o,r)=>"HOME VIEW"}};export{u as default};