import{r as l,o as v,a as p,b as e,c as u,d as i,w as t,u as s,e as m,f as o,F as k,g as r,R as n}from"./index-097aa5eb.js";import{U as g}from"./userService-da882bb3.js";import"./axios-c0bebe37.js";const w={key:0,class:"d-flex"},F={__name:"MainLayout",setup(x){const _=new g,a=l(),c=l(!0),d=async()=>{a.value=await _.index()};return v(async()=>{await d(),c.value=!1}),(y,B)=>{const f=p("router-view");return e(),u(k,null,[c.value?o("",!0):(e(),u("div",w,[i(s(n),{class:"ma-2",to:{name:"Welcome"}},{default:t(()=>[r("Főoldal")]),_:1}),a.value?o("",!0):(e(),m(s(n),{key:0,class:"ma-2",to:{name:"Login"}},{default:t(()=>[r("Bejelentkezés")]),_:1})),a.value?o("",!0):(e(),m(s(n),{key:1,class:"ma-2",to:{name:"Register"}},{default:t(()=>[r("Regisztráció")]),_:1}))])),i(f)],64)}}};export{F as default};
