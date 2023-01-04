import{r as a,i as f,e as l,a as g,c as V,g as o,w as t,h as w,t as F,d as L,F as B}from"./index-17c4e213.js";const y={class:"text-center"},C={__name:"SnackBar",props:{render:Boolean,message:String,color:String,closeFunction:Function},setup(m){const n=m,e=a(),i=a(),s=a(1500);return f(()=>n.render,r=>{e.value=r,setTimeout(()=>{n.closeFunction()},s.value)}),f(()=>n.message,r=>{i.value=r}),(r,d)=>{const c=l("v-snackbar");return g(),V("div",y,[o(c,{elevation:"24",color:m.color,modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=u=>e.value=u),timeout:s.value},{default:t(()=>[w(F(i.value),1)]),_:1},8,["color","modelValue","timeout"])])}}};class I{async logIn(n){return L.post("/api/login",n).then(function(e){return e.data}).catch(function(e){console.log(e)})}}const U={__name:"LoginView",setup(m){const n=a(""),e=a(""),i=a(""),s=a(!1),r=new I,d=async()=>{const c=await r.logIn({email:n.value,password:e.value});c.status==="error"&&(console.log("LOGIN",c),s.value=!0,i.value=c.error)};return(c,u)=>{const p=l("v-text-field"),_=l("v-col"),x=l("v-btn"),b=l("v-row"),k=l("v-container"),S=l("v-form");return g(),V(B,null,[o(S,null,{default:t(()=>[o(k,null,{default:t(()=>[o(b,null,{default:t(()=>[o(_,{cols:"12"},{default:t(()=>[o(p,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=v=>n.value=v),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),o(_,{cols:"12"},{default:t(()=>[o(p,{modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=v=>e.value=v),label:"Password",required:""},null,8,["modelValue"])]),_:1}),o(_,{cols:"12"},{default:t(()=>[o(x,{color:"success",class:"mr-4",onClick:d},{default:t(()=>[w(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(C,{color:"error",render:s.value,message:i.value,"close-function":()=>s.value=!1},null,8,["render","message","close-function"])],64)}}};export{U as default};
