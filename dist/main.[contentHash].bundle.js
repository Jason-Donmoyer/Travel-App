var Client;Client=(()=>{"use strict";var e={751:(e,t,n)=>{n.r(t);const a=document.getElementById("zip"),r=document.getElementById("feelings"),o=document.getElementById("generate"),l=document.getElementById("entryHolder"),i=document.getElementById("date"),d=document.getElementById("temp"),s=document.getElementById("content");let c=new Date,u=c.getMonth()+1+"."+c.getDate()+"."+c.getFullYear();o.addEventListener("click",(async function(){if(5!==a.value.length||""===r.value)alert("Please enter valid data!");else{const e={temp:(await(async(e,t,n)=>{const a=`https://${e}${t}&units=Imperial&appid=${n}`;try{const e=await fetch(a);return await e.json()}catch(e){console.log("There has been an error",e)}})("api.openweathermap.org/data/2.5/weather?zip=",a.value,"13113e1d1128465c8ea19117b412794e")).main.temp,date:u,feelings:r.value};await(async(e,t)=>{await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})("http://localhost:8080/",e),(async()=>{const e=await fetch("http://localhost:8080/all");let t=await e.json();i.innerHTML=`The current date is ${t.date}`,d.innerHTML=`The temperature for your area is ${t.temp} degrees F`,s.innerHTML=`Looks like you're feeling ${t.feelings}`,r.value="",l.style.display="grid",i.style.zIndex=1,d.style.zIndex=1,s.style.zIndex=1})()}}));document.getElementById("generate")}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}return n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(751)})();