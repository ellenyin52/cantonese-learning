// Only Cantonese voices: never silently fall back to Mandarin.
export function cantoneseVoice(voices){
  const suitable=voices.filter(v=>/^(yue(?:[-_]|$)|zh[-_]hk$)/i.test(v.lang));
  return suitable.find(v=>v.localService)||suitable[0]||null;
}
export function createSpeech(onChange=()=>{}){
  const synth=window.speechSynthesis;
  let voice=null,active=null,watchdog=null;
  const available=!!synth&&typeof window.SpeechSynthesisUtterance==='function';
  function refresh(){voice=available?cantoneseVoice(synth.getVoices()):null;onChange();}
  function stop(){clearTimeout(watchdog);active=null;if(available)synth.cancel();onChange();}
  function play(text,rate){
    if(!available)return;
    voice=cantoneseVoice(synth.getVoices());
    if(!voice){onChange();return;}
    stop();
    const utterance=new window.SpeechSynthesisUtterance(text);active=utterance;
    utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=rate;utterance.volume=1;
    const finish=()=>{if(active!==utterance)return;clearTimeout(watchdog);active=null;onChange();};
    const fail=()=>{if(active!==utterance)return;finish();window.dispatchEvent(new CustomEvent('speechfailure'));};
    utterance.onstart=()=>clearTimeout(watchdog);utterance.onend=finish;utterance.onerror=fail;
    watchdog=setTimeout(()=>{if(active===utterance){synth.cancel();fail();}},12000);
    onChange();try{synth.resume();synth.speak(utterance);}catch{fail();}
  }
  if(available)synth.addEventListener('voiceschanged',refresh);
  voice=available?cantoneseVoice(synth.getVoices()):null;
  window.addEventListener('pagehide',stop);
  return {play,stop,refresh,get voice(){return voice;},get available(){return available;},get speaking(){return !!active;}};
}
