import{r as a,h as f,a as l,b as g,i as w,e as o,w as t,d as V,t as y,g as B,F}from"./index-ab64174e.js";const L={class:"text-center"},C={__name:"SnackBar",props:{render:Boolean,message:String,color:String,closeFunction:Function},setup(d){const n=d,e=a(),i=a(),s=a(1500);return f(()=>n.render,r=>{e.value=r,setTimeout(()=>{n.closeFunction()},s.value)}),f(()=>n.message,r=>{i.value=r}),(r,m)=>{const c=l("v-snackbar");return g(),w("div",L,[o(c,{elevation:"24",color:d.color,modelValue:e.value,"onUpdate:modelValue":m[0]||(m[0]=u=>e.value=u),timeout:s.value},{default:t(()=>[V(y(i.value),1)]),_:1},8,["color","modelValue","timeout"])])}}};class I{async logIn(n){return B.post("/api/login",n).then(function(e){return e.data}).catch(function(e){console.log(e)})}}const U={__name:"LoginView",setup(d){const n=a(""),e=a(""),i=a(""),s=a(!1),r=new I,m=async()=>{const c=await r.logIn({email:n.value,password:e.value});if(c.status==="error"){console.log("LOGIN",c),s.value=!0,i.value=c.error;return}window.location.replace("/")};return(c,u)=>{const p=l("v-text-field"),_=l("v-col"),b=l("v-btn"),x=l("v-row"),k=l("v-container"),S=l("v-form");return g(),w(F,null,[o(S,null,{default:t(()=>[o(k,null,{default:t(()=>[o(x,null,{default:t(()=>[o(_,{cols:"12"},{default:t(()=>[o(p,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=v=>n.value=v),label:"E-mail",type:"email",required:""},null,8,["modelValue"])]),_:1}),o(_,{cols:"12"},{default:t(()=>[o(p,{modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=v=>e.value=v),label:"Password",required:"",type:"password"},null,8,["modelValue"])]),_:1}),o(_,{cols:"12"},{default:t(()=>[o(b,{color:"success",class:"mr-4",onClick:m},{default:t(()=>[V(" Bejelentkezés ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(C,{color:"error",render:s.value,message:i.value,"close-function":()=>s.value=!1},null,8,["render","message","close-function"])],64)}}};export{U as default};
