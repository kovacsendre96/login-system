import{r as c,e as a,a as g,c as b,g as e,w as t,h as p,t as S,d as C,F as L}from"./index-bad14318.js";const B={class:"text-center"},y={__name:"SnackBar",props:{snackbar:Boolean,text:String,timeout:1500,color:String},setup(u){const n=u,o=c(n.snackbar),i=c(n.text);return(_,s)=>{const m=a("v-btn"),r=a("v-snackbar");return g(),b("div",B,[e(r,{color:u.color,modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value=l),timeout:u.timeout},{actions:t(()=>[e(m,{color:"white",variant:"text",onClick:s[0]||(s[0]=l=>o.value=!1)},{default:t(()=>[p(" Close ")]),_:1})]),default:t(()=>[p(S(i.value)+" ",1)]),_:1},8,["color","modelValue","timeout"])])}}};class I{async logIn(n){return C.post("/api/login",n).then(function(o){return o.data}).catch(function(o){console.log(o)})}}const U={__name:"LoginView",setup(u){const n=c(""),o=c(""),i=c(""),_=c(!1),s=new I,m=async()=>{const r=await s.logIn({email:n.value,password:o.value});r.status==="error"&&(console.log("LOGIN",r),i.value=r.error,_.value=!0)};return(r,l)=>{const f=a("v-text-field"),v=a("v-col"),x=a("v-btn"),k=a("v-row"),V=a("v-container"),w=a("v-form");return g(),b(L,null,[e(w,null,{default:t(()=>[e(V,null,{default:t(()=>[e(k,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(f,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=d=>n.value=d),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(f,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=d=>o.value=d),label:"Password",required:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(x,{color:"success",class:"mr-4",onClick:m},{default:t(()=>[p(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{color:"error",snackbar:_.value,text:i.value},null,8,["snackbar","text"])],64)}}};export{U as default};