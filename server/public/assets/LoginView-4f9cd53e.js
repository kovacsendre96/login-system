import{r as c,e as n,a as g,c as x,g as e,w as t,h as p,t as S,d as C,F as L}from"./index-09f6e3ca.js";const B={class:"text-center"},y={__name:"SnackBar",props:{snackbar:Boolean,text:String,timeout:1500,color:String},setup(u){const l=u,o=c(!0),i=c(l.text);return(_,s)=>{const m=n("v-btn"),r=n("v-snackbar");return g(),x("div",B,[e(r,{color:u.color,modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),timeout:u.timeout},{actions:t(()=>[e(m,{color:"white",variant:"text",onClick:s[0]||(s[0]=a=>o.value=!1)},{default:t(()=>[p(" Close ")]),_:1})]),default:t(()=>[p(S(i.value)+" ",1)]),_:1},8,["color","modelValue","timeout"])])}}};class I{async logIn(l){return C.post("/api/login",l).then(function(o){return o.data}).catch(function(o){console.log(o)})}}const U={__name:"LoginView",setup(u){const l=c(""),o=c(""),i=c(""),_=c(!1),s=new I,m=async()=>{const r=await s.logIn({email:l.value,password:o.value});r.status==="error"&&(console.log("LOGIN",r),i.value=r.error,_.value=!0)};return(r,a)=>{const f=n("v-text-field"),v=n("v-col"),b=n("v-btn"),k=n("v-row"),V=n("v-container"),w=n("v-form");return g(),x(L,null,[e(w,null,{default:t(()=>[e(V,null,{default:t(()=>[e(k,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(f,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.value=d),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(f,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=d=>o.value=d),label:"Password",required:""},null,8,["modelValue"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(b,{color:"success",class:"mr-4",onClick:m},{default:t(()=>[p(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{color:"error",snackbar:_.value,text:i.value},null,8,["snackbar","text"])],64)}}};export{U as default};