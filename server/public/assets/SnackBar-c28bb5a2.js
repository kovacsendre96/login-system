import{e as a,i as l,r as m,o as d,g as v,a as p,w as _,d as g,t as k}from"./index-451209fb.js";const x={class:"text-center"},f={__name:"SnackBar",props:{render:Boolean,message:String,color:String,closeFunction:Function},setup(n){const o=n,t=a(),s=a(),r=a(1500);return l(()=>o.render,e=>{t.value=e,setTimeout(()=>{o.closeFunction()},r.value)}),l(()=>o.message,e=>{s.value=e}),(e,c)=>{const u=m("v-snackbar");return d(),v("div",x,[p(u,{elevation:"24",color:n.color,modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=i=>t.value=i),timeout:r.value},{default:_(()=>[g(k(s.value),1)]),_:1},8,["color","modelValue","timeout"])])}}};export{f as _};
