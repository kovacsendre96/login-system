import{_ as q}from"./SnackBar-37a1de28.js";import{g as z,r as n,a as s,b as U,c as N,w as o,e,d as R}from"./index-3d3e3859.js";class C{async store(u){return z.post("/api/register",u).then(function(t){return t.data}).catch(function(t){console.log(t)})}}const T={__name:"RegisterView",setup(f){const u=n(""),t=n(""),d=n(""),m=n(""),i=n(""),_=n(""),v=n(!1),V=new C,g=async()=>{const p={first_name:u.value,last_name:t.value,email:d.value,phone:m.value,password:i.value},l=await V.store(p);if(console.log("reg",l),l.status==="error"){v.value=!0,_.value=l.error;return}window.location.replace("/welcome")};return(p,l)=>{const c=s("v-text-field"),r=s("v-col"),w=s("v-btn"),b=s("v-row"),x=s("v-card"),y=s("v-container"),k=s("v-form");return U(),N(k,null,{default:o(()=>[e(y,null,{default:o(()=>[e(x,{class:"p-2"},{default:o(()=>[e(b,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),label:"Keresztnév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(c,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value=a),label:"Vezetéknév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(c,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value=a),type:"email",label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(c,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=a=>i.value=a),label:"Jelszó",required:"",type:"password"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(c,{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=a=>m.value=a),label:"Telefonszám",required:"",type:"phone"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(w,{color:"success",class:"mr-4",onClick:g},{default:o(()=>[R(" Regisztráció ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(q,{color:"error",render:v.value,message:_.value,"close-function":()=>v.value=!1},null,8,["render","message","close-function"])]),_:1})}}};export{T as default};
