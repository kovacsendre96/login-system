import{a as n}from"./axios-c0bebe37.js";class a{async index(){return n.get("/api/user").then(function(t){return t.data}).catch(function(t){console.log(t)})}async logOut(){return n.get("/api/logout").then(function(t){return t.data}).catch(function(t){console.log(t)})}}export{a as U};