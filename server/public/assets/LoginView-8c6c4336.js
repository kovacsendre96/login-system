import{d as w,r,u as g,e as n,a as V,f as x,w as l,g as o,h as b}from"./index-b7bb7bde.js";class L{async logIn(t){return w.post("/api/login",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}const q={__name:"LoginView",setup(i){const t=r(""),e=r(""),_=new L;g();const d=async()=>{await _.logIn({email:t.value,password:e.value}),window.location.reload()};return(k,a)=>{const u=n("v-text-field"),s=n("v-col"),m=n("v-btn"),v=n("v-row"),p=n("v-container"),f=n("v-form");return V(),x(f,null,{default:l(()=>[o(p,null,{default:l(()=>[o(v,null,{default:l(()=>[o(s,{cols:"12"},{default:l(()=>[o(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),o(s,{cols:"12"},{default:l(()=>[o(u,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=c=>e.value=c),label:"Password",required:""},null,8,["modelValue"])]),_:1}),o(s,{cols:"12"},{default:l(()=>[o(m,{color:"success",class:"mr-4",onClick:d},{default:l(()=>[b(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{q as default};
