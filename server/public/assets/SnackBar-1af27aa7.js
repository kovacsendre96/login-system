import{r as a,i as l,a as m,b as d,c as v,d as p,w as _,g,t as k}from"./index-572b4acb.js";const x={class:"text-center"},b={__name:"SnackBar",props:{render:Boolean,message:String,color:String,closeFunction:Function},setup(n){const t=n,o=a(),s=a(),c=a(1500);return l(()=>t.render,e=>{o.value=e,setTimeout(()=>{t.closeFunction()},c.value)}),l(()=>t.message,e=>{s.value=e}),(e,r)=>{const u=m("v-snackbar");return d(),v("div",x,[p(u,{elevation:"24",color:n.color,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=i=>o.value=i),timeout:c.value},{default:_(()=>[g(k(s.value),1)]),_:1},8,["color","modelValue","timeout"])])}}};export{b as _};
