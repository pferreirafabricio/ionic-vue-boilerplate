"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[645],{624:function(e,t,s){s.r(t),s.d(t,{StorageWeb:function(){return r}});var i=s(9895);class r extends i.Uw{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"===typeof e&&(this.group=e)}async get(e){const t=this.impl.getItem(this.applyPrefix(e.key));return{value:t}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){const e=this.rawKeys().map((e=>e.substring(this.prefix.length)));return{keys:e}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],s=[],i="_cap_",r=Object.keys(this.impl).filter((e=>0===e.indexOf(i)));for(const a of r){const r=a.substring(i.length),n=null!==(e=this.impl.getItem(a))&&void 0!==e?e:"",{value:p}=await this.get({key:r});"string"===typeof p?s.push(r):(await this.set({key:r,value:n}),t.push(r))}return{migrated:t,existing:s}}async removeOld(){const e="_cap_",t=Object.keys(this.impl).filter((t=>0===t.indexOf(e)));for(const s of t)this.impl.removeItem(s)}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter((e=>0===e.indexOf(this.prefix)))}applyPrefix(e){return this.prefix+e}}}}]);
//# sourceMappingURL=645.2a288b59.js.map