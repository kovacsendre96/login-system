import{g as x,r as d,a as s,b as y,c as q,w as o,e,d as z}from"./index-ab64174e.js";class U{async store(u){return x.post("/api/register",u).then(function(a){console.log(a)}).catch(function(a){console.log(a)})}}const N={__name:"RegisterView",setup(p){const u=d(""),a=d(""),m=d(""),c=d(""),i=d(""),_=new U,f=()=>{const v={first_name:u.value,last_name:a.value,email:m.value,phone:c.value,password:i.value};_.store(v)};return(v,l)=>{const r=s("v-text-field"),n=s("v-col"),V=s("v-btn"),b=s("v-row"),g=s("v-container"),w=s("v-form");return y(),q(w,null,{default:o(()=>[e(g,null,{default:o(()=>[e(b,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=t=>u.value=t),label:"Keresztnév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t),label:"Vezetéknév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=t=>m.value=t),type:"email",label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=t=>i.value=t),label:"Jelszó",required:"",type:"password"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=t=>c.value=t),label:"Telefonszám",required:"",type:"phone"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(V,{color:"success",class:"mr-4",onClick:f},{default:o(()=>[z(" Regisztráció ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{N as default};
