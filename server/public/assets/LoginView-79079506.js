import{d as g,r as u,e as n,a as w,f as V,w as l,g as o,h as x}from"./index-bc19e4db.js";class b{async logIn(t){return g.post("/api/login",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}const C={__name:"LoginView",setup(_){const t=u(""),e=u(""),i=new b,d=()=>{i.logIn({email:t.value,password:e.value})};return(L,a)=>{const r=n("v-text-field"),s=n("v-col"),m=n("v-btn"),v=n("v-row"),p=n("v-container"),f=n("v-form");return w(),V(f,null,{default:l(()=>[o(p,null,{default:l(()=>[o(v,null,{default:l(()=>[o(s,{cols:"12"},{default:l(()=>[o(r,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),o(s,{cols:"12"},{default:l(()=>[o(r,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=c=>e.value=c),label:"Password",required:""},null,8,["modelValue"])]),_:1}),o(s,{cols:"12"},{default:l(()=>[o(m,{color:"success",class:"mr-4",onClick:d},{default:l(()=>[x(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{C as default};
