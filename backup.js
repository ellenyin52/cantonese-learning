export const progressKeys={'daily-cantonese-v1':7,'daily-cantonese-advanced-v1':7,'daily-cantonese-90-v1':90};
const empty=()=>({completed:[],checkins:[],marks:{},sessions:{},challenges:{}});
const validDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s+'T12:00:00Z'))&&new Date(s+'T12:00:00Z').toISOString().slice(0,10)===s;
export function validateProgress(value,total){
 const fail=()=>{throw new Error('学习记录格式不正确，请选择从本 App 导出的备份。');};
 if(!value||typeof value!=='object'||!Array.isArray(value.completed)||!Array.isArray(value.checkins)||!value.marks||!value.sessions)fail();
 const id=n=>Number.isInteger(n)&&n>=0&&n<total;
 if(value.completed.length>total||!value.completed.every(id)||new Set(value.completed).size!==value.completed.length)fail();
 // Courses advance in order. This keeps the next-day lesson deterministic.
 if(!value.completed.every((n,i)=>n===i))fail();
 if(value.checkins.length>10000)fail();
 const dates=new Set();
 const checkins=value.checkins.map(x=>{if(!x||!validDate(x.date)||!id(x.lesson)||!value.completed.includes(x.lesson)||dates.has(x.date))fail();dates.add(x.date);return {date:x.date,lesson:x.lesson};});
 const result=empty();result.completed=[...value.completed];result.checkins=checkins;
 for(const [k,items] of Object.entries(value.marks)){if(!/^\d+$/.test(k)||!id(Number(k))||!Array.isArray(items)||items.length>15||new Set(items).size!==items.length||!items.every(x=>typeof x==='string'&&/^(w[0-9]|s[0-4])$/.test(x)))fail();result.marks[k]=[...items];}
 for(const [k,v] of Object.entries(value.sessions)){if(!validDate(k)||!Number.isInteger(v)||v<0||v>1200)fail();result.sessions[k]=v;}
 for(const [k,v] of Object.entries(value.challenges||{})){if(!/^\d+$/.test(k)||!id(Number(k))||typeof v!=='boolean')fail();result.challenges[k]=v;}
 return result;
}
export function parseBackup(text){
 const backup=JSON.parse(text);if(backup?.app!=='daily-cantonese'||backup.version!==1||!backup.records||typeof backup.records!=='object')throw new Error('不是有效的日日粤备份文件。');
 const records={};for(const [key,value] of Object.entries(backup.records)){if(!Object.hasOwn(progressKeys,key))throw new Error('备份包含无法识别的课程。');records[key]=validateProgress(value,progressKeys[key]);}
 if(!Object.keys(records).length)throw new Error('备份没有学习记录。');return records;
}
