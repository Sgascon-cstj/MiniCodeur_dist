var p=Object.defineProperty;var u=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(u(e,typeof s!="symbol"?s+"":s,t),t);import{S as i}from"./UserRepository-6a763eae.js";import{x as n}from"./index-3512041f.js";class f{constructor(){a(this,"axios",n("axios"))}async retrieveAllFromChapter(s){try{const t=await this.axios.get(s.answers_href);if(t.status===200)return t.data}catch(t){throw t}}async retrieveOne(s){try{const t=await this.axios.get(`${i}/api/answer/${s}`);if(t.status===200)return t.data}catch(t){throw t}}async add(s,t){try{const r=await this.axios.post(`${i}/api/admin/answers/${t.id_chapter}`,s);if(r.status===201)return r.data}catch(r){throw r}}}class w{constructor(s=""){a(this,"id_answer",0);a(this,"answer");this.answer=s}}class m{constructor(){a(this,"axios",n("axios"))}async retrieveAll(){try{const s=await this.axios.get(`${i}/api/chapters`);if(s.status===200)return s.data}catch(s){throw s}}async retrieveOne(s){try{const t=await this.axios.get(`${i}/api/chapter/${s}`);if(t.status===200)return t.data}catch(t){throw t}}async retrieveAllAsAdmin(){try{const s=await this.axios.get(`${i}/api/admin/chapters`);if(s.status===200)return s.data}catch(s){throw s}}async add(s){try{let t=JSON.stringify({chapter:s});const r=await this.axios.post(`${i}/api/admin/chapters`,t);if(r.status===200)return r.data}catch(t){throw t}}async modify(s){try{let t=JSON.stringify({chapter:s});const r=await this.axios.patch(`${i}/api/admin/chapters/${s.id_chapter}`,t);if(r.status===200)return r.data}catch(t){throw t}}async retrieveAllChapterQuestions(s){try{const t=await this.axios.get(s.questions_href);if(t.status===200)return t.data}catch(t){throw t}}async retrieveAllChapterQuestionsAsAdmin(s){try{const t=await this.axios.get(`${i}/api/admin/chapters/${s.id_chapter}/questions`);if(t.status===200)return t.data}catch(t){throw t}}}class y{constructor(s=""){a(this,"id_questionType",0);a(this,"type");this.type=s}}class ${constructor(s="",t=new y,r="",o="",c=new w,h=!1){a(this,"id_question",0);a(this,"questionContent");a(this,"type");a(this,"hints");a(this,"explicationErreur");a(this,"answer");a(this,"isExamQuestion");this.questionContent=s,this.type=t,this.hints=r,this.explicationErreur=o,this.answer=c,this.isExamQuestion=h}}export{w as A,m as C,$ as Q,f as a,y as b};
