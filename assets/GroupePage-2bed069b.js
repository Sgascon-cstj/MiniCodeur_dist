import{_ as I,D as z}from"./DefaultLayout-fbb1746d.js";import{G as j}from"./GroupeRepository-f481ad96.js";import{d as A,r as y,o as O,b as o,c as d,e as U,g as e,w as t,h as f,f as w,t as G,F as N,s as E,l as C,q as M,y as F}from"./index-008c8163.js";import{U as W}from"./UserRepository-a77d85ad.js";const H={class:"text-yellow-accent-1"},J=w("hr",null,null,-1),K={class:""},Q=w("p",null,"Membres",-1),X=w("hr",null,null,-1),Y=w("p",null,"Administrateur",-1),Z=w("p",null,"Membre",-1),ee=A({__name:"detailGroup",props:["group"],setup($){const i=$,s=new j,u=y(),r=y(),c=y(!1),_=y(!1);O(async()=>{var a;await n(),_.value=await s.checkCreator((a=u.value)==null?void 0:a.name),console.log(_.value)});async function n(){try{if(u.value=await s.retrieveOne(i.group.group_href),u.value){const a=u.value.members;r.value=await s.retrieveMembers(a)}}catch{}}async function p(a){var l;try{const m=await s.deleteMembers((l=u.value)==null?void 0:l.name,a.uuid_user);(m==null?void 0:m.status)==202&&n()}catch{}}async function v(){var a;if(_.value==!1)return!1;try{const l=await s.deleteGroup((a=u.value)==null?void 0:a.name);(l==null?void 0:l.status)==202&&(location.reload(),alert("Le groupe a été supprimé"))}catch{}}return(a,l)=>{const m=o("v-icon"),h=o("v-btn"),x=o("v-col"),R=o("v-row"),q=o("v-card-title"),T=o("v-list-item-title"),L=o("v-list-item-content"),g=o("v-list-item"),V=o("v-list"),S=o("v-card-text"),P=o("v-card-actions"),B=o("v-card"),k=o("v-dialog");return d(),U(N,null,[e(h,{color:"white",onClick:l[0]||(l[0]=b=>c.value=!0)},{default:t(()=>[e(m,null,{default:t(()=>[f(" mdi-eye-circle-outline ")]),_:1}),f(" info ")]),_:1}),e(k,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=b=>c.value=b),width:"50%"},{default:t(()=>[e(B,null,{default:t(()=>[e(q,null,{default:t(()=>{var b;return[e(R,null,{default:t(()=>[e(x,{cols:"6",class:"mb-5"},{default:t(()=>{var D;return[w("h2",H,G((D=u.value)==null?void 0:D.name),1)]}),_:1}),e(x,{cols:"6"},{default:t(()=>[e(h,{color:"red",onClick:l[1]||(l[1]=D=>v()),"prepend-icon":"mdi-delete"},{default:t(()=>[f("Supprimer le groupe")]),_:1})]),_:1})]),_:1}),J,w("p",K,G((b=u.value)==null?void 0:b.description),1)]}),_:1}),e(S,{class:"d-block"},{default:t(()=>[Q,X,e(V,{height:"300px",style:{"overflow-y":"auto"}},{default:t(()=>[(d(!0),U(N,null,E(r.value,(b,D)=>(d(),C(g,{key:D,value:b,color:"primary"},{default:t(()=>[e(R,null,{default:t(()=>[e(x,{cols:"2"},{default:t(()=>[e(I,{user:b.user},null,8,["user"])]),_:2},1024),e(x,{cols:"3"},{default:t(()=>[e(L,null,{default:t(()=>[e(T,{textContent:G(b.user.displayname)},null,8,["textContent"])]),_:2},1024)]),_:2},1024),b.isTheCreator?(d(),C(x,{key:0,cols:"4"},{default:t(()=>[Y]),_:1})):M("",!0),b.isTheCreator?M("",!0):(d(),C(x,{key:1,cols:"4"},{default:t(()=>[Z]),_:1})),_.value&&!b.isTheCreator?(d(),C(x,{key:2,cols:"2"},{default:t(()=>[e(h,{hint:"Supprimer l'utilisateur",height:"75%",width:"50%",color:"red",onClick:ie=>p(b.user),icon:"mdi-delete"},null,8,["onClick"])]),_:2},1024)):M("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(h,{color:"primary",block:"",onClick:l[2]||(l[2]=b=>c.value=!1)},{default:t(()=>[f("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),te={key:0},oe={key:1},le={width:"100%"},ne=A({__name:"groupeCard",props:["group"],setup($){const i=$,s=new j;async function u(){try{const r=await s.leftGroup(i.group.name);(r==null?void 0:r.status)==202&&location.reload()}catch(r){console.log(r)}}return(r,c)=>{const _=o("v-icon"),n=o("v-col"),p=o("v-row"),v=o("v-card-title"),a=o("v-card-text"),l=o("v-btn"),m=o("v-card-actions"),h=o("v-card");return d(),C(n,{cols:"2",class:"ma-2"},{default:t(()=>[e(h,{height:"290px"},{default:t(()=>[e(v,null,{default:t(()=>[e(p,{class:"text-center"},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[i.group.isTheCreator?(d(),U("p",te,[e(_,null,{default:t(()=>[f("mdi-account-star")]),_:1})])):M("",!0),i.group.isTheCreator?M("",!0):(d(),U("p",oe,[e(_,null,{default:t(()=>[f("mdi-account")]),_:1})])),e(p,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[w("p",le,G(i.group.name),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(_,null,{default:t(()=>[f("mdi-account-group")]),_:1})]),_:1}),e(n,{cols:"12"},{default:t(()=>[w("p",null,G(i.group.description),1)]),_:1}),e(n,{cols:"12"},{default:t(()=>[w("p",null,"Participants: "+G(i.group.nbUser),1)]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(ee,{group:i.group},null,8,["group"]),i.group.isTheCreator?M("",!0):(d(),C(l,{key:0,onClick:c[0]||(c[0]=x=>u()),color:"red",class:"ml-1",icon:"mdi-delete"}))]),_:1})]),_:1})]),_:1})]),_:1})}}}),ae=w("h1",{class:"mb-4 text-cyan-accent-2"},"Création d'un groupe",-1),ue=A({__name:"newGroup",setup($){const i=new j,s=y(!1),u=y(),r=y(),c=y(),_={required:a=>!!a||"Champs requis",length:a=>a&&a.length<=15||"Le nom du groupe ne doit pas dépasser 15 caractères"},n=new W,p=y();O(async()=>{p.value=await n.retrieveOne()});async function v(){if(u.value&&r.value&&c.value)try{const a={name:u.value,description:r.value,groupPassword:c.value};if(u.value.length>15){alert("Le nom du groupe ne doit pas dépasser 15 caractères");return}const l=await i.create(a);l=="Le groupe a bien été créé"?(alert(l),s.value=!1,location.reload()):alert(l)}catch{}else alert("Veuillez remplir tous les champs")}return(a,l)=>{var P,B;const m=o("v-text-field"),h=o("v-btn"),x=o("v-form"),R=o("v-sheet"),q=o("v-card-text"),T=o("v-col"),L=o("v-row"),g=o("v-card-actions"),V=o("v-card"),S=o("v-dialog");return((P=p.value)==null?void 0:P.roles.at(0))=="ROLE_PROF"||((B=p.value)==null?void 0:B.roles.at(0))=="ROLE_ADMIN"?(d(),C(h,{key:0,color:"primary",class:"ml-2"},{default:t(()=>[f(" Créer un groupe "),e(S,{modelValue:s.value,"onUpdate:modelValue":l[6]||(l[6]=k=>s.value=k),activator:"parent",width:"auto"},{default:t(()=>[e(V,null,{default:t(()=>[e(q,null,{default:t(()=>[ae,e(R,{width:"300",class:"mx-auto"},{default:t(()=>[e(x,{onSubmit:l[4]||(l[4]=F(()=>{},["prevent"]))},{default:t(()=>[e(m,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=k=>u.value=k),rules:[_.required,_.length],label:"Nom du groupe"},null,8,["modelValue","rules"]),e(m,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=k=>r.value=k),rules:[_.required],label:"Description"},null,8,["modelValue","rules"]),e(m,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=k=>c.value=k),rules:[_.required],label:"Mot de passe"},null,8,["modelValue","rules"]),e(h,{type:"submit",onClick:l[3]||(l[3]=k=>v()),block:"",class:"mt-2"},{default:t(()=>[f("Créer")]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(L,null,{default:t(()=>[e(T,{cols:"12"},{default:t(()=>[e(h,{color:"primary",block:"",onClick:l[5]||(l[5]=k=>s.value=!1)},{default:t(()=>[f("Annuler")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):M("",!0)}}}),re={key:0,class:"text-red-accent-1"},se=A({__name:"groupPassword",props:["group"],setup($){const i=$,s=new j,u=y(null),r=y(!1),c=y(!1),_={required:p=>!!p||"Champs requis"};async function n(){if(u.value)try{await s.joinGroup(i.group.name,u.value),r.value=!1,location.reload(),c.value=!1}catch{c.value=!0}}return(p,v)=>{const a=o("v-text-field"),l=o("v-btn"),m=o("v-form"),h=o("v-sheet"),x=o("v-card-text"),R=o("v-col"),q=o("v-row"),T=o("v-card-actions"),L=o("v-card"),g=o("v-dialog");return d(),C(l,{color:"primary",class:"ml-2"},{default:t(()=>[f(" Rejoindre "),e(g,{modelValue:r.value,"onUpdate:modelValue":v[4]||(v[4]=V=>r.value=V),activator:"parent",width:"auto"},{default:t(()=>[e(L,null,{default:t(()=>[e(x,null,{default:t(()=>[e(h,{width:"300",class:"mx-auto"},{default:t(()=>[e(m,{onSubmit:v[2]||(v[2]=F(()=>{},["prevent"]))},{default:t(()=>[c.value?(d(),U("p",re,"Mauvais mot de passe")):M("",!0),e(a,{modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=V=>u.value=V),rules:[_.required],label:"Mot de passe"},null,8,["modelValue","rules"]),e(l,{onClick:v[1]||(v[1]=V=>n()),type:"submit",block:"",class:"mt-2"},{default:t(()=>[f("Rejoindre")]),_:1})]),_:1})]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(q,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(l,{color:"primary",block:"",onClick:v[3]||(v[3]=V=>r.value=!1)},{default:t(()=>[f("Annuler")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),ce=w("h1",{class:"mb-2 text-primary"},"Rejoindre un groupe",-1),_e=w("hr",null,null,-1),de=A({__name:"joinGroupe",setup($){const i=new j,s=y();O(async()=>{await u()});async function u(){s.value=await i.retrieveAll()}const r=y(!1);async function c(_){var n;await u(),s.value=(n=s.value)==null?void 0:n.filter(p=>p.name.includes(_))}return(_,n)=>{const p=o("v-btn"),v=o("v-combobox"),a=o("v-icon"),l=o("v-col"),m=o("v-row"),h=o("v-list-item"),x=o("v-list"),R=o("v-card-text"),q=o("v-card-actions"),T=o("v-card"),L=o("v-dialog");return d(),U(N,null,[e(p,{color:"primary",onClick:n[0]||(n[0]=g=>r.value=!0)},{default:t(()=>[f(" Rejoindre ")]),_:1}),e(L,{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=g=>r.value=g),width:"50%"},{default:t(()=>[e(T,null,{default:t(()=>[e(R,{class:"text-center"},{default:t(()=>[ce,_e,e(v,{ref:"searchBar",class:"ma-5 mb-1",outlined:"",dense:"","hide-no-data":"",placeholder:"Rechecher un groupe",rounded:"","onUpdate:search":n[1]||(n[1]=g=>c(g)),variant:"solo","prepend-icon":"mdi-magnify"},null,512),e(x,{height:"300px",style:{"overflow-y":"auto"}},{default:t(()=>[(d(!0),U(N,null,E(s.value,g=>(d(),C(h,null,{default:t(()=>[e(m,null,{default:t(()=>[e(l,{cols:"2"},{default:t(()=>[e(a,null,{default:t(()=>[f("mdi-account-group")]),_:1})]),_:1}),e(l,{cols:"3 "},{default:t(()=>[w("p",null,G(g.name),1)]),_:2},1024),e(l,{cols:"4"},{default:t(()=>[w("p",null,G(g.description),1)]),_:2},1024),e(l,{cols:"3 text-center"},{default:t(()=>[e(se,{group:g},null,8,["group"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}),e(q,null,{default:t(()=>[e(p,{color:"primary",block:"",onClick:n[2]||(n[2]=g=>r.value=!1)},{default:t(()=>[f("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),ge=A({__name:"GroupePage",setup($){const i=new j,s=y();return O(async()=>{s.value=await i.retrieveMyGroup()}),(u,r)=>{const c=o("v-col"),_=o("v-row");return d(),C(z,null,{default:t(()=>[e(_,{class:"ma-5"},{default:t(()=>[e(c,{cols:"4",offset:"8"},{default:t(()=>[e(_,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(de),e(ue)]),_:1})]),_:1})]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(_,{class:"ma-3"},{default:t(()=>[(d(!0),U(N,null,E(s.value,n=>(d(),C(ne,{group:n},null,8,["group"]))),256))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ge as default};