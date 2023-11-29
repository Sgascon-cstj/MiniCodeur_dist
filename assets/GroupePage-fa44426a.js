import{_ as F,D as I}from"./DefaultLayout-bfd4b0b8.js";import{G as j}from"./GroupeRepository-91c92a90.js";import{d as A,r as g,o as B,b as o,c as v,e as T,g as e,w as t,h as w,f as y,t as $,F as D,s as S,l as k,q,y as E}from"./index-3512041f.js";import{U as z}from"./UserRepository-6a763eae.js";const W={class:"text-yellow-accent-1"},H=y("hr",null,null,-1),J={class:""},K=y("p",null,"Membres",-1),Q=y("hr",null,null,-1),X=y("p",null,"Administrateur",-1),Y=y("p",null,"Membre",-1),Z=A({__name:"detailGroup",props:["group"],setup(V){const m=V,d=new j,s=g(),a=g(),_=g(!1),i=g(!1);B(async()=>{var u;await n(),i.value=await d.checkCreator((u=s.value)==null?void 0:u.name),console.log(i.value)});async function n(){try{if(s.value=await d.retrieveOne(m.group.group_href),s.value){const u=s.value.members;a.value=await d.retrieveMembers(u)}}catch{}}async function p(u){var r;try{const l=await d.deleteMembers((r=s.value)==null?void 0:r.name,u.uuid_user);(l==null?void 0:l.status)==202&&n()}catch{}}return(u,r)=>{const l=o("v-icon"),h=o("v-btn"),b=o("v-card-title"),x=o("v-col"),R=o("v-list-item-title"),G=o("v-list-item-content"),M=o("v-row"),U=o("v-list-item"),f=o("v-list"),C=o("v-card-text"),O=o("v-card-actions"),L=o("v-card"),N=o("v-dialog");return v(),T(D,null,[e(h,{color:"white",onClick:r[0]||(r[0]=c=>_.value=!0)},{default:t(()=>[e(l,null,{default:t(()=>[w(" mdi-eye-circle-outline ")]),_:1}),w(" info ")]),_:1}),e(N,{modelValue:_.value,"onUpdate:modelValue":r[2]||(r[2]=c=>_.value=c),width:"50%"},{default:t(()=>[e(L,null,{default:t(()=>[e(b,null,{default:t(()=>{var c,P;return[y("h2",W,$((c=s.value)==null?void 0:c.name),1),H,y("p",J,$((P=s.value)==null?void 0:P.description),1)]}),_:1}),e(C,{class:"d-block"},{default:t(()=>[K,Q,e(f,{height:"300px",style:{"overflow-y":"auto"}},{default:t(()=>[(v(!0),T(D,null,S(a.value,(c,P)=>(v(),k(U,{key:P,value:c,color:"primary"},{default:t(()=>[e(M,null,{default:t(()=>[e(x,{cols:"2"},{default:t(()=>[e(F,{user:c.user},null,8,["user"])]),_:2},1024),e(x,{cols:"3"},{default:t(()=>[e(G,null,{default:t(()=>[e(R,{textContent:$(c.user.displayname)},null,8,["textContent"])]),_:2},1024)]),_:2},1024),c.isTheCreator?(v(),k(x,{key:0,cols:"4"},{default:t(()=>[X]),_:1})):q("",!0),c.isTheCreator?q("",!0):(v(),k(x,{key:1,cols:"4"},{default:t(()=>[Y]),_:1})),i.value&&!c.isTheCreator?(v(),k(x,{key:2,cols:"2"},{default:t(()=>[e(h,{hint:"Supprimer l'utilisateur",height:"75%",width:"50%",color:"red",onClick:_e=>p(c.user),icon:"mdi-delete"},null,8,["onClick"])]),_:2},1024)):q("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(h,{color:"primary",block:"",onClick:r[1]||(r[1]=c=>_.value=!1)},{default:t(()=>[w("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),ee={key:0},te={width:"100%"},oe=A({__name:"groupeCard",props:["group"],setup(V){const m=V,d=new j;async function s(){try{const a=await d.leftGroup(m.group.name);(a==null?void 0:a.status)==202&&location.reload()}catch(a){console.log(a)}}return(a,_)=>{const i=o("v-icon"),n=o("v-col"),p=o("v-row"),u=o("v-card-title"),r=o("v-card-text"),l=o("v-btn"),h=o("v-card-actions"),b=o("v-card");return v(),k(n,{cols:"2",class:"ma-2"},{default:t(()=>[e(b,{height:"290px"},{default:t(()=>[e(u,null,{default:t(()=>[e(p,{class:"text-center"},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[m.group.isTheCreator?(v(),T("p",ee,[e(i,null,{default:t(()=>[w("mdi-account-star")]),_:1})])):q("",!0),e(p,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[y("p",te,$(m.group.name),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(p,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(i,null,{default:t(()=>[w("mdi-account-group")]),_:1})]),_:1}),e(n,{cols:"12"},{default:t(()=>[y("p",null,$(m.group.description),1)]),_:1}),e(n,{cols:"12"},{default:t(()=>[y("p",null,"Participants: "+$(m.group.nbUser),1)]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(Z,{group:m.group},null,8,["group"]),m.group.isTheCreator?q("",!0):(v(),k(l,{key:0,onClick:_[0]||(_[0]=x=>s()),color:"red",class:"ml-1",icon:"mdi-delete"}))]),_:1})]),_:1})]),_:1})]),_:1})}}}),le=y("h1",{class:"mb-4 text-cyan-accent-2"},"Création d'un groupe",-1),ne=A({__name:"newGroup",setup(V){const m=new j,d=g(!1),s=g(),a=g(),_=g(),i={required:r=>!!r||"Champs requis",length:r=>r&&r.length<=15||"Le nom du groupe ne doit pas dépasser 15 caractères"},n=new z,p=g();B(async()=>{p.value=await n.retrieveOne()});async function u(){if(s.value&&a.value&&_.value)try{const r={name:s.value,description:a.value,groupPassword:_.value};if(s.value.length>15){alert("Le nom du groupe ne doit pas dépasser 15 caractères");return}const l=await m.create(r);l=="Le groupe a bien été créé"?(alert(l),d.value=!1,location.reload()):alert(l)}catch{}else alert("Veuillez remplir tous les champs")}return(r,l)=>{var L,N;const h=o("v-text-field"),b=o("v-btn"),x=o("v-form"),R=o("v-sheet"),G=o("v-card-text"),M=o("v-col"),U=o("v-row"),f=o("v-card-actions"),C=o("v-card"),O=o("v-dialog");return((L=p.value)==null?void 0:L.roles.at(0))=="ROLE_PROF"||((N=p.value)==null?void 0:N.roles.at(0))=="ROLE_ADMIN"?(v(),k(b,{key:0,color:"primary",class:"ml-2"},{default:t(()=>[w(" Créer un groupe "),e(O,{modelValue:d.value,"onUpdate:modelValue":l[6]||(l[6]=c=>d.value=c),activator:"parent",width:"auto"},{default:t(()=>[e(C,null,{default:t(()=>[e(G,null,{default:t(()=>[le,e(R,{width:"300",class:"mx-auto"},{default:t(()=>[e(x,{onSubmit:l[4]||(l[4]=E(()=>{},["prevent"]))},{default:t(()=>[e(h,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),rules:[i.required,i.length],label:"Nom du groupe"},null,8,["modelValue","rules"]),e(h,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=c=>a.value=c),rules:[i.required],label:"Description"},null,8,["modelValue","rules"]),e(h,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=c=>_.value=c),rules:[i.required],label:"Mot de passe"},null,8,["modelValue","rules"]),e(b,{type:"submit",onClick:l[3]||(l[3]=c=>u()),block:"",class:"mt-2"},{default:t(()=>[w("Crée")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(U,null,{default:t(()=>[e(M,{cols:"12"},{default:t(()=>[e(b,{color:"primary",block:"",onClick:l[5]||(l[5]=c=>d.value=!1)},{default:t(()=>[w("Annuler")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):q("",!0)}}}),ae={key:0,class:"text-red-accent-1"},ue=A({__name:"groupPassword",props:["group"],setup(V){const m=V,d=new j,s=g(null),a=g(!1),_=g(!1),i={required:p=>!!p||"Champs requis"};async function n(){if(s.value)try{await d.joinGroup(m.group.name,s.value),a.value=!1,location.reload(),_.value=!1}catch{_.value=!0}}return(p,u)=>{const r=o("v-text-field"),l=o("v-btn"),h=o("v-form"),b=o("v-sheet"),x=o("v-card-text"),R=o("v-col"),G=o("v-row"),M=o("v-card-actions"),U=o("v-card"),f=o("v-dialog");return v(),k(l,{color:"primary",class:"ml-2"},{default:t(()=>[w(" Rejoindre "),e(f,{modelValue:a.value,"onUpdate:modelValue":u[4]||(u[4]=C=>a.value=C),activator:"parent",width:"auto"},{default:t(()=>[e(U,null,{default:t(()=>[e(x,null,{default:t(()=>[e(b,{width:"300",class:"mx-auto"},{default:t(()=>[e(h,{onSubmit:u[2]||(u[2]=E(()=>{},["prevent"]))},{default:t(()=>[_.value?(v(),T("p",ae,"Mauvais mot de passe")):q("",!0),e(r,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=C=>s.value=C),rules:[i.required],label:"Mot de passe"},null,8,["modelValue","rules"]),e(l,{onClick:u[1]||(u[1]=C=>n()),type:"submit",block:"",class:"mt-2"},{default:t(()=>[w("Rejoindre")]),_:1})]),_:1})]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(G,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(l,{color:"primary",block:"",onClick:u[3]||(u[3]=C=>a.value=!1)},{default:t(()=>[w("Annuler")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),se=y("h1",{class:"mb-2 text-primary"},"Rejoindre un groupe",-1),re=y("hr",null,null,-1),ce=A({__name:"joinGroupe",setup(V){const m=new j,d=g();B(async()=>{await s()});async function s(){d.value=await m.retrieveAll()}const a=g(!1);async function _(i){var n;await s(),d.value=(n=d.value)==null?void 0:n.filter(p=>p.name.includes(i))}return(i,n)=>{const p=o("v-btn"),u=o("v-combobox"),r=o("v-icon"),l=o("v-col"),h=o("v-row"),b=o("v-list-item"),x=o("v-list"),R=o("v-card-text"),G=o("v-card-actions"),M=o("v-card"),U=o("v-dialog");return v(),T(D,null,[e(p,{color:"primary",onClick:n[0]||(n[0]=f=>a.value=!0)},{default:t(()=>[w(" Rejoindre ")]),_:1}),e(U,{modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=f=>a.value=f),width:"50%"},{default:t(()=>[e(M,null,{default:t(()=>[e(R,{class:"text-center"},{default:t(()=>[se,re,e(u,{ref:"searchBar",class:"ma-5 mb-1",outlined:"",dense:"","hide-no-data":"",placeholder:"Rechecher un groupe",rounded:"","onUpdate:search":n[1]||(n[1]=f=>_(f)),variant:"solo","prepend-icon":"mdi-magnify"},null,512),e(x,{height:"300px",style:{"overflow-y":"auto"}},{default:t(()=>[(v(!0),T(D,null,S(d.value,f=>(v(),k(b,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,{cols:"2"},{default:t(()=>[e(r,null,{default:t(()=>[w("mdi-account-group")]),_:1})]),_:1}),e(l,{cols:"3 "},{default:t(()=>[y("p",null,$(f.name),1)]),_:2},1024),e(l,{cols:"4"},{default:t(()=>[y("p",null,$(f.description),1)]),_:2},1024),e(l,{cols:"3 text-center"},{default:t(()=>[e(ue,{group:f},null,8,["group"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}),e(G,null,{default:t(()=>[e(p,{color:"primary",block:"",onClick:n[2]||(n[2]=f=>a.value=!1)},{default:t(()=>[w("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),me=A({__name:"GroupePage",setup(V){const m=new j,d=g();return B(async()=>{d.value=await m.retrieveMyGroup()}),(s,a)=>{const _=o("v-col"),i=o("v-row");return v(),k(I,null,{default:t(()=>[e(i,{class:"ma-5"},{default:t(()=>[e(_,{cols:"4",offset:"8"},{default:t(()=>[e(i,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(ce),e(ne)]),_:1})]),_:1})]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(i,{class:"ma-3"},{default:t(()=>[(v(!0),T(D,null,S(d.value,n=>(v(),k(oe,{group:n},null,8,["group"]))),256))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{me as default};
