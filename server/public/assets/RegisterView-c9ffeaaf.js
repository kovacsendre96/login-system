import{r as s,a as r,o as V,c as g,w as o,b as e,g as p,u as q,h as N,R as U}from"./index-6d39bb36.js";import{_ as C}from"./SnackBar-3387912f.js";import{a as B}from"./axios-c0bebe37.js";class S{async store(u){return B.post("/api/registration",u).then(function(t){return t.data}).catch(function(t){console.log(t)})}}const E={__name:"RegisterView",setup(w){const u=s(""),t=s(""),c=s(""),d=s(""),i=s(""),_=s(""),v=s(!1),b=new S,k=async()=>{const f={first_name:u.value,last_name:t.value,email:c.value,phone:d.value,password:i.value},l=await b.store(f);if(l.status==="error"){v.value=!0,_.value=l.error;return}window.location.replace("/welcome")};return(f,l)=>{const m=r("v-text-field"),n=r("v-col"),y=r("v-btn"),x=r("v-row"),z=r("v-container"),R=r("v-form");return V(),g(R,null,{default:o(()=>[e(z,null,{default:o(()=>[e(x,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(m,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=a=>u.value=a),label:"Keresztnév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(m,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value=a),label:"Vezetéknév",type:"name",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(m,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=a=>c.value=a),type:"email",label:"E-mail",required:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(m,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=a=>i.value=a),label:"Jelszó",required:"",type:"password"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(m,{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=a=>d.value=a),label:"Telefonszám",required:"",type:"phone"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:o(()=>[e(y,{color:"success",class:"mr-4",onClick:k},{default:o(()=>[p(" Regisztráció ")]),_:1})]),_:1}),e(n,{cols:"12"},{default:o(()=>[p(" Van már fiókod? "),f.user?N("",!0):(V(),g(q(U),{key:0,class:"ma-2",to:{name:"Login"}},{default:o(()=>[p("Bejelentkezés")]),_:1}))]),_:1})]),_:1})]),_:1}),e(C,{color:"error",render:v.value,message:_.value,"close-function":()=>v.value=!1},null,8,["render","message","close-function"])]),_:1})}}};export{E as default};
