import{a as x}from"./axios-c0bebe37.js";import{r as d,a as s,b as q,c as U,w as o,d as e,e as N}from"./index-1e331d91.js";class R{async store(u){return x.post("/api/register",u).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}const B={__name:"RegisterView",setup(_){const u=d(""),t=d(""),m=d(""),c=d(""),i=d(""),p=new R,f=()=>{const v={first_name:u.value,last_name:t.value,email:m.value,phone:c.value,password:i.value};p.store(v)};return(v,l)=>{const r=s("v-text-field"),n=s("v-col"),V=s("v-btn"),b=s("v-row"),w=s("v-container"),g=s("v-form");return q(),U(g,null,{default:o(()=>[e(w,null,{default:o(()=>[e(b,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),label:"First name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value=a),label:"Last name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=a=>m.value=a),label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=a=>i.value=a),label:"Password",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=a=>c.value=a),label:"Phone",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(V,{color:"success",class:"mr-4",onClick:f},{default:o(()=>[N(" Register ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{B as default};
