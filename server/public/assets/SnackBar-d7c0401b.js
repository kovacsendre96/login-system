import{r as a,j as l,a as m,b as d,g as v,d as p,w as _,i as g,t as k}from"./index-c782dd49.js";const x={class:"text-center"},b={__name:"SnackBar",props:{render:Boolean,message:String,color:String,closeFunction:Function},setup(n){const t=n,o=a(),s=a(),r=a(1500);return l(()=>t.render,e=>{o.value=e,setTimeout(()=>{t.closeFunction()},r.value)}),l(()=>t.message,e=>{s.value=e}),(e,c)=>{const u=m("v-snackbar");return d(),v("div",x,[p(u,{elevation:"24",color:n.color,modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=i=>o.value=i),timeout:r.value},{default:_(()=>[g(k(s.value),1)]),_:1},8,["color","modelValue","timeout"])])}}};export{b as _};