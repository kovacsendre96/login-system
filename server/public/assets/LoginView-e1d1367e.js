import{_ as b}from"./SnackBar-9735e210.js";import{a as x}from"./axios-c0bebe37.js";import{r as s,a as n,o as k,f as y,b as e,w as l,F as B,g as C}from"./index-fdd4b7ee.js";class L{async logIn(a){return x.post("/api/login",a).then(function(o){return o.data}).catch(function(o){console.log(o)})}}const F={__name:"LoginView",setup(d){const a=s(""),o=s(""),m=s(""),r=s(!1),f=new L,v=async()=>{const c=await f.logIn({email:a.value,password:o.value});if(c.status==="error"){r.value=!0,m.value=c.error;return}window.location.replace("/welcome")};return(c,t)=>{const _=n("v-text-field"),u=n("v-col"),p=n("v-btn"),g=n("v-row"),w=n("v-container"),V=n("v-form");return k(),y(B,null,[e(V,null,{default:l(()=>[e(w,null,{default:l(()=>[e(g,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[e(_,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),label:"E-mail",type:"email",required:""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(_,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=i=>o.value=i),label:"Password",required:"",type:"password"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{color:"success",class:"mr-4",onClick:v},{default:l(()=>[C(" Bejelentkezés ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{color:"error",render:r.value,message:m.value,"close-function":()=>r.value=!1},null,8,["render","message","close-function"])],64)}}};export{F as default};
