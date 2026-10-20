import fs from 'node:fs';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const plain=s=>s.replace(/^import .*\n/gm,'').replace(/\bexport (?=(?:const|function)\b)/g,'');
let html=read('index.html').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+read('style.css')+'</style>');
const js=['data.js','curriculum.js','progress.js','backup.js','speech.js','app.js'].map(p=>plain(read(p))).join('\n');
html=html.replace('<script type="module" src="app.js"></script>',()=>'<script>\n'+js+'\n</script>');
fs.mkdirSync(new URL('../downloads',import.meta.url),{recursive:true});fs.writeFileSync(new URL('../downloads/daily-cantonese.html',import.meta.url),html);
console.log('Built downloads/daily-cantonese.html');
