import{D as p}from"./DefaultLayout-fbb1746d.js";import{E as u}from"./ExamRepository-42f4242d.js";import{d as m,r as a,o as v,b as o,c as _,l as f,w as n,g as t,f as d,t as y}from"./index-008c8163.js";import"./UserRepository-a77d85ad.js";const D=m({__name:"Synthese",setup(g){const e=a(),l=new u,r=a();return pointer=0,console.log(e.value),v(()=>{r.value=l.retrieveOne(),e.value=5,console.log(e.value),setInterval(()=>{e.value>0&&(e.value=e.value-1)},1e3)}),(x,h)=>{const s=o("v-progress-linear"),c=o("v-btn"),i=o("v-alert");return _(),f(p,null,{default:n(()=>[t(s,{"model-value":"45",height:"10",striped:"",color:"yellow"}),d("h2",null,"Timer : "+y(e.value),1),t(i,{icon:"$vuetify",title:"Le temps est écoulé !",text:"Le temps est écouler",type:"warning",variant:"tonal"},{default:n(()=>[t(c,{color:"yellow"})]),_:1})]),_:1})}}});export{D as default};
