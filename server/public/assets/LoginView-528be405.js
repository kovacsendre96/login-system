import{r as c,e as l,a as g,c as w,g as e,w as t,h as p,t as S,d as C,F as L}from"./index-8857bc86.js";const B={class:"text-center"},y={__name:"SnackBar",props:{render:Boolean,message:String,timeout:1500,color:String},setup(u){const n=u;console.log(n),watch(n.render,i=>{console.log(i)});const o=c(n.render),d=c(n.message);return(i,s)=>{const m=l("v-btn"),r=l("v-snackbar");return g(),w("div",B,[e(r,{color:u.color,modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),timeout:u.timeout},{actions:t(()=>[e(m,{color:"white",variant:"text",onClick:s[0]||(s[0]=a=>o.value=!1)},{default:t(()=>[p(" Close ")]),_:1})]),default:t(()=>[p(S(d.value)+" ",1)]),_:1},8,["color","modelValue","timeout"])])}}};class I{async logIn(n){return C.post("/api/login",n).then(function(o){return o.data}).catch(function(o){console.log(o)})}}const U={__name:"LoginView",setup(u){const n=c(""),o=c(""),d=c(""),i=c(!1),s=new I,m=async()=>{const r=await s.logIn({email:n.value,password:o.value});r.status==="error"&&(console.log("LOGIN",r),i.value=!0,d.value=r.error)};return(r,a)=>{const f=l("v-text-field"),_=l("v-col"),V=l("v-btn"),b=l("v-row"),x=l("v-container"),k=l("v-form");return g(),w(L,null,[e(k,null,{default:t(()=>[e(x,null,{default:t(()=>[e(b,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(f,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=v=>n.value=v),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(f,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=v=>o.value=v),label:"Password",required:""},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(V,{color:"success",class:"mr-4",onClick:m},{default:t(()=>[p(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{color:"error",render:i.value,message:d.value},null,8,["render","message"])],64)}}};export{U as default};
