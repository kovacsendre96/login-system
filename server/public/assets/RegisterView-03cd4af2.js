import{_ as k}from"./SnackBar-67b7e526.js";import{g as q,r as n,a as r,b as z,c as U,w as o,e,d as N}from"./index-c3f3f5d5.js";class R{async store(u){return q.post("/api/register",u).then(function(t){return t.data}).catch(function(t){console.log(t)})}}const B={__name:"RegisterView",setup(_){const u=n(""),t=n(""),d=n(""),m=n(""),i=n(""),f=n(""),v=n(!1),V=new R,g=async()=>{const p={first_name:u.value,last_name:t.value,email:d.value,phone:m.value,password:i.value},l=await V.store(p);console.log("reg",l)};return(p,l)=>{const c=r("v-text-field"),s=r("v-col"),b=r("v-btn"),w=r("v-row"),x=r("v-container"),y=r("v-form");return z(),U(y,null,{default:o(()=>[e(x,null,{default:o(()=>[e(w,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),label:"Keresztnév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(c,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value=a),label:"Vezetéknév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(c,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value=a),type:"email",label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(c,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=a=>i.value=a),label:"Jelszó",required:"",type:"password"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(c,{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=a=>m.value=a),label:"Telefonszám",required:"",type:"phone"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(b,{color:"success",class:"mr-4",onClick:g},{default:o(()=>[N(" Regisztráció ")]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{color:"error",render:v.value,message:f.value,"close-function":()=>v.value=!1},null,8,["render","message","close-function"])]),_:1})}}};export{B as default};