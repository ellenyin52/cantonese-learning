import {test} from 'node:test';import assert from 'node:assert/strict';import {cantoneseVoice} from './speech.js';
test('never substitutes Mandarin for Cantonese',()=>{assert.equal(cantoneseVoice([{lang:'zh-CN'},{lang:'zh-TW'},{lang:'en-HK'}]),null);});
test('accepts Cantonese identifiers and prefers local voices',()=>{const remote={lang:'yue-HK',localService:false},local={lang:'zh-HK',localService:true};assert.equal(cantoneseVoice([remote,local]),local);assert.equal(cantoneseVoice([{lang:'yue'}]).lang,'yue');});
