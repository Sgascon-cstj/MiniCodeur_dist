var o=Object.defineProperty;var c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var i=(e,t,r)=>(c(e,typeof t!="symbol"?t+"":t,r),r);import{S as s}from"./UserRepository-6a763eae.js";import{x as n}from"./index-3512041f.js";class y{constructor(){i(this,"axios",n("axios"))}async retrieveMyGroup(){try{const t=await this.axios.get(`${s}/api/myGroups`);if(t.status===200)return t.data}catch(t){throw t}}async create(t){try{if((await this.axios.post(`${s}/api/groups/create`,t)).status===201)return"Le groupe a bien été créé"}catch{return"Le nom du groupe est déjà utilisé"}}async retrieveAll(){try{const t=await this.axios.get(`${s}/api/groups`);if(t.status===200)return t.data}catch(t){throw t}}async retrieveAllAsAdmin(){try{const t=await this.axios.get(`${s}/api/admin/groups`);if(t.status===200)return t.data}catch(t){throw t}}async retrieveOne(t){try{const r=await this.axios.get(t);if(r.status===200)return r.data}catch(r){throw r}}async retrieveMembers(t){try{const r=await this.axios.get(t);if(r.status===200)return r.data}catch(r){throw r}}async checkCreator(t){try{const r=await this.axios.get(`${s}/api/groups/${t}/isCreator`);if(r.status===200)return r.data}catch(r){throw r}}async joinGroup(t,r){try{const a=await this.axios.post(`${s}/api/groups/join`,{groupName:t,password:r});if(a.status===200)return a.data}catch(a){throw a}}async leftGroup(t){try{const r=await this.axios.delete(`${s}/api/groups/${t}`);if(r.status===202)return r}catch(r){throw r}}async deleteMembers(t,r){try{const a=await this.axios.delete(`${s}/api/groups/${t}/${r}`);if(a.status==202)return a}catch(a){throw a}}}export{y as G};
